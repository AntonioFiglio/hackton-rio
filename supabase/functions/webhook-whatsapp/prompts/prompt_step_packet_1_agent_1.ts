
export const PROMPT_STEP_PACKET_1_AGENT_1 = `
## STEP_SCOPE
- Boas vindas e perguntar quantas pessoas.

## STEP_SLOTS
- required_slots: ["people_count"]

## STEP_SETUP
- SKIP_SCRIPT = false
- STOP_SCRIPT = false
- END_SCRIPT = false

## STEP_SCRIPTS
- START_SCRIPT (Primeira Interação):
  - https://hxvvalyzzoudzacrglou.supabase.co/storage/v1/object/public/publico/send/audio/audio_inicio.ogg
  - Vou te ajudar a fazer a sua comida da semana.
  - Pra quantas pessoas na casa?

- RETRY_SCRIPT:
  - Preciso saber pra quantas pessoas é a comida. Manda um número ou escreve por extenso.
  - É pra 1, 2, 3 pessoas? Me diz aí.

- SUCCESS_SCRIPT:
  - Show! Na sua família existe restrição alimentar?
  - Por exemplo, intolerância a lactose, gluten ou alergia.

## EXTRACTION_RULES
- **people_count**:
  - **Extraction**: Extract the number of people (integer). Use "1" as default if user says "só eu" or "sozinha".
`;
