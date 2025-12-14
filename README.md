# XEPA — Hackathon Devs de Impacto RJ 2025

> **Tema:** Segurança Alimentar no Brasil orientada por dados e tecnologia
> **Time:** XEPA
> **Integrantes:**
> - Antonio Filho
> - Pedro Morais
> - David Alpa
> - Lucy Moza

---

## 1) Resumo (em 5 linhas)
**Problema:** Famílias de baixa renda enfrentam insegurança alimentar enquanto mercados locais descartam alimentos próprios para consumo.
**Causa estrutural:** Falta de coordenação local, ausência de personalização alimentar por família e uso ineficiente de dados e logística.
**Solução:** XEPA, uma IA no WhatsApp que monta caixas alimentares personalizadas para famílias usando alimentos próximos do descarte de mercados próximos.
**IA:** A IA analisa perfil familiar + geolocalização + oferta local para recomendar o box alimentar mais adequado.
**Impacto esperado:** Redução de desperdício (kg de alimentos resgatados) e aumento do acesso alimentar com economia média por família.

---

## 2) Demo (links)
- 🎥 Vídeo (até 2 min): [Visitar Demo](https://drive.google.com/drive/folders/13OlF6RC1jbGNaACyoYT5VmaFx7y2Yx9j?usp=sharing)

- 🖥️ Slides (até 12): [Slides]](https://www.canva.com/design/DAG7bS3Loh4/IRmLk5fVHDQjtaFiLNwuRw/view?utm_content=DAG7bS3Loh4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfed1630e25)

- 🔗 Diagrama (Miro):

![alt text](./image.png)

---

## 3) Problema estrutural e público-alvo
- **Quem é afetado:**
  - Famílias de baixa renda (especialmente mães solo, famílias com crianças e idosos)
  - Mercados locais (perdas financeiras por descarte)

- **Onde/escopo:**
  - Cidade do Rio de Janeiro (piloto urbano, escalável nacionalmente)

- **Diagnóstico sistêmico:**
  - Alimentos próximos do vencimento são descartados por falta de canal adequado.
  - Famílias compram comida genérica, cara e pouco nutritiva por falta de orientação.
  - Soluções existentes não consideram geolocalização nem perfil familiar.

---

## 4) O que construímos (funcionalidades)
- [x] Chatbot no WhatsApp (WhatsApp-first, acessível)
- [x] Onboarding com perfil da família (tamanho, crianças, idosos, restrições)
- [x] Uso de geolocalização (bairro/CEP aproximado)
- [x] Motor de recomendação de caixas alimentares (ex: Box Proteína)
- [x] Seleção de alimentos próximos do descarte em mercados locais
- [ ] Loop de feedback para aprendizado da IA

---

## 5) Como a solução funciona (arquitetura)
**Fluxo:**
1. Ingestão de dados:
- Mensagens WhatsApp do usuário
- Perfil familiar
- Geolocalização (bairro/CEP)
- Catálogo de alimentos dos mercados parceiros

2. Processamento / feature engineering:
- Classificação do perfil familiar
- Priorização nutricional (proteína, infantil, básico, emergencial)
- Filtro por proximidade geográfica

3. IA:
- Recomendação de box alimentar personalizada
- Ajuste baseado em orçamento e feedback

4. Saída:
- Sugestão de caixa via WhatsApp
- Confirmação e feedback do usuário

---

## 6) Uso de IA (explícito e justificável)
**Tarefa de IA:** Recomendação e decisão assistida ( LLM OpenAI).

**Por que precisa de IA:**
Regras fixas não conseguem lidar com a variabilidade de:
- Composição familiar
- Orçamento
- Oferta local dinâmica
- Preferências e feedback contínuo

**Modelo(s):**
- LLM compatível com OpenAI (para NLP e decisão assistida)
- Regras heurísticas para validações nutricionais mínimas

**Entrada:**
- Texto do WhatsApp
- Perfil familiar
- Localização aproximada
- Lista de itens disponíveis

**Saída:**
- Tipo de box
- Lista de alimentos
- Valor estimado

**Validação:**
- Taxa de aceite do box
- Feedback qualitativo do usuário

**Cuidados:**
- Não armazenar dados sensíveis
- Não substituir orientação médica/nutricional
- Transparência da recomendação

---

## 7) Dados (fontes e dicionário)
**Fontes usadas:**
- IBGE / PNAD — https://www.ibge.gov.br — contexto de insegurança alimentar.
- Dados públicos de preços de alimentos — simulação.
- Dados sintéticos de mercados locais — prototipagem.

**Dicionário (principais campos):**
- `family_size`: número de pessoas
- `has_children`: boolean
- `has_elderly`: boolean
- `has_pregnant`: boolean
- `diet_restrictions`: array
- `location_area`: bairro/CEP
- `box_type`: proteína | infantil | básico | emergencial
- `budget_range`: faixa de preço

> **Privacidade:** não coletamos endereço exato, CPF, nome completo ou mensagens brutas.
> Apenas dados mínimos, anonimizados e agregados.

---

## 8) Como rodar localmente
### Pré-requisitos
- Node.js 18+
- Docker + Docker Compose (o Supabase usa containers)
- Supabase CLI instalada e logada (`supabase start` vai subir DB/Auth/Storage)
- `psql` disponível no PATH (para aplicar o schema)
- Chaves válidas: WhatsApp Graph API, OpenAI, MCP (opcional)

### Passo a passo
1) Clone e entre no projeto
```bash
git clone <repo>
cd <repo>
```

2) Copie as variáveis de ambiente e preencha
```bash
cp .env.example .env
```
- Pegue `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` do `supabase start` ou `supabase status --output env`.
- Preencha os tokens do WhatsApp, OpenAI e MCP.

3) Suba a stack local do Supabase
```bash
supabase start
```
- Mantém DB/Auth/Storage rodando em `127.0.0.1:54322` (Postgres) e `http://127.0.0.1:54321/functions/v1`.

4) Carregue o schema no Postgres local
```bash
psql "postgresql://postgres:postgres@127.0.0.1:54322/postgres" -f database_schema/create_tables.sql
```

5) Rode a Edge Function do WhatsApp (local)
```bash
cd supabase
supabase functions serve webhook-whatsapp --env-file ../.env --no-verify-jwt --debug
```
- Endpoint local exposto: `http://127.0.0.1:54321/functions/v1/webhook-whatsapp`.
- Use ngrok/localtunnel para apontar o webhook do WhatsApp para esse endpoint.

9) Roadmap pós-hackathon

- Piloto com mercados reais no RJ

- Métricas automáticas de impacto social

- Integração com CRAS / Prefeituras (B2G)

- Recorrência inteligente de caixas

10) Créditos e conformidade (anti-cheating)

- Código desenvolvido durante o hackathon.

- Open source utilizado:

- zaip_ai_opensource — https://github.com/davidalpa/zaip_ai_opensource

  - Utilizado para integração com a API do WhatsApp.
Disponibilizado para todos os times no grupo oficial do hackathon.
-Dados públicos:
-IBGE / PNAD — uso contextual.

13) Licença

MIT
