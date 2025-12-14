export const PROMPT_STEP_PACKET_9_AGENT_1 = `
## STEP_SCOPE
- Oferecer e enviar receita.

## STEP_SLOTS
- required_slots: ["end_conversation"]

## STEP_SETUP
- SKIP_SCRIPT = true
- STOP_SCRIPT = false
- END_SCRIPT = true

## STEP_INSTRUCTIONS
- **RECIPE_GENERATION**:
  - No \`SUCCESS_SCRIPT\`, gere uma receita **CURTA** e **SIMPLES** baseada no \`basket_type\` escolhido.
  - Ex: Salada de frutas se for Frutas, Omelete se for Proteínas, etc.
- **ANTI-HALLUCINATION**:
  - **NÃO** pergunte se quer lista de compras.
  - **NÃO** ofereça mais nada.
  - Apenas mande a receita e encerre.

## STEP_SCRIPTS
- RETRY_SCRIPT:
  - Tchau. Até mais!

- SUCCESS_SCRIPT:
  - Aqui está uma ideia legal pra você fazer:
  - [Gerar Receita: Título + Ingredientes + Preparo Rápido]
  - Até a próxima! 👋

## EXTRACTION_RULES
- **end_conversation**:
  - **Extraction**: Any -> "finished".
`;
