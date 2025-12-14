export const PROMPT_STEP_PACKET_2_AGENT_1 = `
## STEP_SCOPE
- Perguntar sobre restrições alimentares.

## STEP_SLOTS
- required_slots: ["dietary_restrictions"]

## STEP_SETUP
- SKIP_SCRIPT = false
- STOP_SCRIPT = false
- END_SCRIPT = false

## STEP_SCRIPTS
- RETRY_SCRIPT:
  - Não entendi. Se tiver alguma restrição, escreve qual (ex: glúten).
  - Se não tiver, é só escrever "não".

- SUCCESS_SCRIPT:
  - Entendi. Quantos dias de refeição você deseja de 1 a 5?

## EXTRACTION_RULES
- **dietary_restrictions**:
  - **Extraction**: Extract restrictions mentioned (e.g., "lactose", "gluten").
  - **Default**: If user says "não", "nenhuma", "tudo ok" -> Set value to "Nenhuma".
`;
