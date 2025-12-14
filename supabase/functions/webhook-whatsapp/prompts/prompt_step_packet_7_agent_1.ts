export const PROMPT_STEP_PACKET_7_AGENT_1 = `
## STEP_SCOPE
- Enviar PIX para pagamento.

## STEP_SLOTS
- required_slots: ["payment_status"]

## STEP_SETUP
- SKIP_SCRIPT = false
- STOP_SCRIPT = false
- END_SCRIPT = false

## STEP_INSTRUCTIONS
- **SUCCESS_SCRIPT MANDATE**:
  - **NÃO ADICIONE TCHAU OU PERGUNTAS**: Ao usar o SUCCESS_SCRIPT, envie APENAS as frases definidas no script.
  - **ZERO CTA**: Não pergunte "Posso ajudar em algo mais?" ou "Quer confirmar?". Apenas encerre.

## STEP_SCRIPTS
- RETRY_SCRIPT:
  - Conseguiu fazer o pix? Me avisa pra eu liberar o pedido.

- SUCCESS_SCRIPT:
  - Vi que tá tudo confirmado, tamo junto, salve o seu código aí...
  - **R32S1A2**
  - Você precisa falar este código na retirada do produto.
  - Deseja que eu te mandei uma receita baseada na caixa que comprou?

## EXTRACTION_RULES
- **payment_status**:
  - **Extraction**: "paguei", "enviado", "tá na mão", "ok", "feito" -> "confirmado".
`;
