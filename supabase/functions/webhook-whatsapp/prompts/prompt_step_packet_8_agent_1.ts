export const PROMPT_STEP_PACKET_8_AGENT_1 = `
## STEP_SCOPE
- Fornecer código de retirada e agradecer.

## STEP_SLOTS
- required_slots: ["code_delivered"]

## STEP_SETUP
- SKIP_SCRIPT = false
- STOP_SCRIPT = false
- END_SCRIPT = false

## STEP_SCRIPTS
- RETRY_SCRIPT:
  - O código é R32S1A2.

- SUCCESS_SCRIPT:
  - [Gerar uma receita simples baseada nos itens de uma caixa de feira]
  - Aqui está uma ideia legal pra você fazer!

## EXTRACTION_RULES
- **code_delivered**:
  - **Extraction**: Any interaction after seeing the code -> "entregue".
`;
