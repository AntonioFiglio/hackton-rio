export const PROMPT_STEP_PACKET_6_AGENT_1 = `
## STEP_SCOPE
- Retornar detalhes do pedido (Caixa Sugerida).

## STEP_SLOTS
- required_slots: ["order_confirmation"]

## STEP_SETUP
- SKIP_SCRIPT = false
- STOP_SCRIPT = false
- END_SCRIPT = false

## STEP_INSTRUCTIONS
- **ANTI-HALLUCINATION**:
  - **NÃO** pergunte se o usuário quer a chave PIX em outro formato.
  - **NÃO** adicione perguntas extras no final do SUCCESS_SCRIPT. Encerrar com "confirmo rapidinho 😉".

## STEP_SCRIPTS
- RETRY_SCRIPT:
  - Podemos fechar assim?
  - Me diz se tá confirmado ou se quer mudar algo.

- SUCCESS_SCRIPT:
  - Então fechou assim... Se tiver tudo certinho, é só finalizar no PIX para o mercado 💸
  - 🔑 Chave PIX do Mercado Pão de Açúcar: 21991101563
  - https://hxvvalyzzoudzacrglou.supabase.co/storage/v1/object/public/publico/send/image/pix_exemplo.png
  - Depois que pagar, me avisa aqui que eu já confirmo rapidinho 😉

## EXTRACTION_RULES
- **order_confirmation**:
  - **Extraction**: "sim", "ok", "fechou", "tá certo" -> "sim".
  - **Validation**: If user wants to change, logic should theoretically loop back or handle rejection (simplified here to just confirmation).
`;
