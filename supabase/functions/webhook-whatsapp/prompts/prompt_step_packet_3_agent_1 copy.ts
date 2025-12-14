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
  - Escolhe um número de dias entre 1 e 5 pra eu montar a caixa certa.
  - Preciso saber se é pra 1, 2, 3, 4 ou 5 dias.

- SUCCESS_SCRIPT:
  - Beleza! Agora me diz uma coisa rapidinho
  - Você quer comprar próximo da sua localização?

## EXTRACTION_RULES
- **days_count**:
  - **Extraction**: Extract integer between 1 and 5.
  - **Validation**:
    - Must be >= 1 and <= 5.
    - If user says "uma semana" or "7 dias", explain max is 5 via RETRY.
`;
