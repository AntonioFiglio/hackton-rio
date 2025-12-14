// Map step -> process prompt (markdown)
// Map Step -> Prompt File
// Import Prompts
import { PROMPT_STEP_PACKET_1_AGENT_1 } from "../prompts/prompt_step_packet_1_agent_1.ts";
import { PROMPT_STEP_PACKET_2_AGENT_1 } from "../prompts/prompt_step_packet_2_agent_1.ts";
import { PROMPT_STEP_PACKET_3_AGENT_1 } from "../prompts/prompt_step_packet_3_agent_1.ts";
import { PROMPT_STEP_PACKET_4_AGENT_1 } from "../prompts/prompt_step_packet_4_agent_1.ts";
import { PROMPT_STEP_PACKET_5_AGENT_1 } from "../prompts/prompt_step_packet_5_agent_1.ts";
import { PROMPT_STEP_PACKET_6_AGENT_1 } from "../prompts/prompt_step_packet_6_agent_1.ts";
import { PROMPT_STEP_PACKET_7_AGENT_1 } from "../prompts/prompt_step_packet_7_agent_1.ts";
import { PROMPT_STEP_PACKET_8_AGENT_1 } from "../prompts/prompt_step_packet_8_agent_1.ts";
import { PROMPT_STEP_PACKET_9_AGENT_1 } from "../prompts/prompt_step_packet_9_agent_1.ts";

import { PROMPT_INSTRUCTIONS_AGENT_1 } from "../prompts/prompt_instructions_agent_1.ts";

export function getProcessPrompt(step: number): string | null {
  const promptMap: Record<number, string> = {
    1: PROMPT_STEP_PACKET_1_AGENT_1,
    2: PROMPT_STEP_PACKET_2_AGENT_1,
    3: PROMPT_STEP_PACKET_3_AGENT_1,
    4: PROMPT_STEP_PACKET_4_AGENT_1,
    5: PROMPT_STEP_PACKET_5_AGENT_1,
    6: PROMPT_STEP_PACKET_6_AGENT_1,
    7: PROMPT_STEP_PACKET_7_AGENT_1,
    8: PROMPT_STEP_PACKET_8_AGENT_1,
    9: PROMPT_STEP_PACKET_9_AGENT_1,
  };

  return promptMap[step] || null;
}

export function getInstructionPrompt(step: number): string {
  // Always Agent 1 (Xepa) for now
  return PROMPT_INSTRUCTIONS_AGENT_1;
}

// Map step -> funnel stage (Pipeline)
export function getPipelineStage(step: number): string | null {
  const map: Record<number, string> = {
    1: "1 - Identificação",
    2: "2 - Restrições",
    3: "3 - Duração",
    4: "4 - Cesta",
    5: "5 - Localização",
    6: "6 - Confirmação",
    7: "7 - Pagamento",
    8: "8 - Código",
    9: "9 - Finalizado"
  };
  return map[step] || null;
}
