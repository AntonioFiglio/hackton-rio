export const PROMPT_STEP_PACKET_4_AGENT_1 = `
## STEP_SCOPE
- Perguntar o tipo de cesta (1-5).

## STEP_SLOTS
- required_slots: ["basket_type"]

## STEP_SETUP
- SKIP_SCRIPT = false
- STOP_SCRIPT = false
- END_SCRIPT = false

## STEP_INSTRUCTIONS
- **DETALHES_CESTAS**:
  - Se o usuário tiver dúvidas, explique os itens usando este resumo:
  1. **Proteína Total**: Carnes variadas (frango, boi) e ovos.
  2. **Sustança**: Carboidratos densos como batata, mandioca e inhame.
  3. **Frescor da Horta**: Mix variado de legumes e verduras da estação.
  4. **Frutas da Estação**: Seleção de frutas doces e cítricas.
  5. **Grãos Essenciais**: Arroz, feijão, lentilha e grão de bico.

## STEP_SCRIPTS
- RETRY_SCRIPT:
  - Não entendi. Digite o número (1-5) ou pergunte sobre os itens se tiver dúvida.

- SUCCESS_SCRIPT:
  - Beleza! Agora me diz... 
  - Você quer comprar próximo da sua localização?

## EXTRACTION_RULES
- **basket_type**:
  - **Extraction**: Extract integer 1-5 or keywords (Proteinas, Carbo, Hortifruti, Frutas, Grãos).
  - **Validation**: Must be one of the valid options.
`;
