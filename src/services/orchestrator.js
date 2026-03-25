import { generateAIResponse } from "./aiService.js";

export async function processMessage(rawMessage) {
  // 1. Normalização
  const message = normalizeMessage(rawMessage);

  // 2. Classificação simples (MVP)
  const intent = classifyIntent(message.text);

  // 3. Decisão
  if (intent === "humano") {
    return {
      reply: "Encaminhando para atendimento humano..."
    };
  }

  // 4. IA responde
  const aiResponse = await generateAIResponse(message.text);

  return {
    reply: aiResponse
  };
}

function normalizeMessage(raw) {
  return {
    userId: raw.userId || "anon",
    channel: raw.channel || "chat",
    text: raw.message
  };
}

function classifyIntent(text) {
  if (text.toLowerCase().includes("falar com atendente")) {
    return "humano";
  }
  return "ia";
}
