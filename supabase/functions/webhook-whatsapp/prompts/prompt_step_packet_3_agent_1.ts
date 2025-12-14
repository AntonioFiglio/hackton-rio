export const PROMPT_STEP_PACKET_3_AGENT_1 = `
## STEP_SCOPE
- Perguntar a duração das refeições (1 a 5 dias).

## STEP_SLOTS
- required_slots: ["days_count"]

## STEP_SETUP
- SKIP_SCRIPT = false
- STOP_SCRIPT = false
- END_SCRIPT = false

## STEP_SCRIPTS
- RETRY_SCRIPT:
  - Não entendi. Digite apenas o número de dias (1 a 5).

- SUCCESS_SCRIPT:
  - Escolha o tipo de cesta que deseja:
  1. 🥩 Cesta Proteína Total (1kg)
  2. 🍚 Cesta Sustança (Corboidratos) (1.5kg)
  3. 🥦 Cesta Frescor da Horta (2kg)
  4. 🍎 Cesta Frutas da Estação (1.8kg)
  5. 🌾 Cesta Grãos Essenciais (1.2kg)

## EXTRACTION_RULES
- **days_count**:
  - **Extraction**: Extract integer between 1 and 5.
  - **Validation**:
    - Must be >= 1 and <= 5.
    - If user says "uma semana" or "7 dias", explain max is 5 via RETRY.
`;
