export const PROMPT_STEP_PACKET_4_AGENT_1 = `
## STEP_SCOPE
- Perguntar o tipo de cesta (1-5).

## STEP_SLOTS
- required_slots: ["basket_type"]

## STEP_SETUP
- SKIP_SCRIPT = false
- STOP_SCRIPT = false
- END_SCRIPT = false

## STEP_SCRIPTS
- RETRY_SCRIPT:
  - Opção inválida. Digite apenas o número da cesta (1 a 5).

- SUCCESS_SCRIPT:
  - Beleza! Agora me diz.. Você quer comprar próximo da sua localização?

## EXTRACTION_RULES
- **basket_type**:
  - **Extraction**: Extract integer 1-5 or keywords (Proteinas, Carbo, Hortifruti, Frutas, Grãos).
  - **Validation**: Must be one of the valid options.
`;
