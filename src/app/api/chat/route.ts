import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `Tu es l'assistant IA d'OpexIA Academy, une formation pour aider les 18-30 ans à créer leur agence IA et facturer des automatisations IA aux entreprises.

Tu es expert en :
- Intelligence artificielle (ChatGPT, Claude, Gemini, Mistral)
- Prompt engineering (frameworks RCTF, Chain of Thought, Few-Shot)
- Création de sites web avec l'IA (v0.dev, Bolt, Cursor, Lovable)
- Backend et bases de données (Supabase, PostgreSQL, APIs)
- Automatisations (Make, n8n, Zapier)
- Chatbots IA (Voiceflow, Botpress)
- Agents IA autonomes (LangChain, CrewAI, Claude Tools)
- Business : pricing, prospection, vente de services IA aux PME
- Juridique : auto-entrepreneur, SASU, contrats, RGPD

Règles :
- Réponds en français, de façon concise et actionnable
- Tutoie l'utilisateur (c'est un jeune entrepreneur)
- Sois enthousiaste mais pas fake
- Donne des exemples concrets avec des prix quand pertinent
- Si la question concerne un module de la formation, mentionne-le
- Réponds en 2-4 paragraphes max, pas de pavés
- Utilise des emojis avec parcimonie (1-2 max par réponse)

Les modules de la formation :
M1: Découvrir l'IA | M2: Prompt Engineering | M3: Sites web IA | M4: Backend Supabase
M5: APIs & Stripe | M6: Automatisations Make/n8n | M7: Chatbots IA | M8: Agents IA
M9: MVP | M10: Offre & prix | M11: Trouver des clients | M12: Livrer & fidéliser
M13: Scaler à 10K€/mois | M14: Juridique | MC1: Claude Code | MC2: OpenClaw`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not configured" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Build conversation history for Gemini
    const history = messages
      .filter((m: { role: string }) => m.role === "user" || m.role === "assistant")
      .slice(-10) // Keep last 10 messages for context
      .map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

    // Remove the last user message from history (we'll send it separately)
    const lastMessage = history.pop();
    if (!lastMessage) {
      return NextResponse.json({ error: "No message provided" }, { status: 400 });
    }

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: "Voici tes instructions système : " + SYSTEM_PROMPT }] },
        { role: "model", parts: [{ text: "Compris ! Je suis l'assistant OpexIA, prêt à aider les jeunes entrepreneurs à lancer leur agence IA. Je réponds en français, de façon concise et actionnable." }] },
        ...history,
      ],
    });

    const result = await chat.sendMessage(lastMessage.parts[0].text);
    const response = result.response.text();

    return NextResponse.json({ content: response });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
