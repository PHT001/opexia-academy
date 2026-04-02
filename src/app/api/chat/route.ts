import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";

const DAILY_LIMIT = 20;

const SYSTEM_PROMPT = `Tu es l'assistant IA d'OpexIA Academy. Tu donnes des conseils courts et des suggestions aux eleves de la formation.

REGLES STRICTES :
- Reponds en 3-5 phrases MAXIMUM. Jamais plus.
- Donne uniquement des suggestions, conseils ou orientations
- Si la question est complexe, oriente vers le bon module de la formation
- Tutoie l'utilisateur
- Reponds en francais
- 1 emoji max par reponse
- Ne genere JAMAIS de code, de longs tutoriels ou d'explications detaillees
- Si on te demande du code ou un truc long, dis "Ca c'est couvert dans le Module X, va checker la lecon !"

Modules : M1: Decouvrir l'IA | M2: Prompt Engineering | M3: Sites web IA | M4: Backend Supabase | M5: APIs & Stripe | M6: Automatisations | M7: Chatbots IA | M8: Agents IA | M9: MVP | M10: Offre & prix | M11: Trouver des clients | M12: Livrer & fideliser | M13: Scaler a 10K/mois | M14: Juridique | MC1: Claude Code | MC2: OpenClaw`;

/** Simple in-memory rate limiter (resets on server restart / per instance) */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
let lastCleanup = 0;
const CLEANUP_INTERVAL = 60_000; // run cleanup at most once per minute

function checkRateLimit(userId: string): { allowed: boolean; remaining: number } {
  const now = Date.now();

  // Periodically purge expired entries to prevent memory leak
  if (now - lastCleanup > CLEANUP_INTERVAL) {
    lastCleanup = now;
    for (const [key, val] of rateLimitMap) {
      if (now > val.resetAt) rateLimitMap.delete(key);
    }
  }

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const entry = rateLimitMap.get(userId);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(userId, { count: 1, resetAt: endOfDay.getTime() });
    return { allowed: true, remaining: DAILY_LIMIT - 1 };
  }

  if (entry.count >= DAILY_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: DAILY_LIMIT - entry.count };
}

export async function POST(req: NextRequest) {
  // Auth check — only authenticated academy/one_to_one users
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const isAdmin = session.user.role === "admin";
  if (!isAdmin) {
    const enrollment = await prisma.enrollment.findFirst({
      where: { userId: session.user.id, status: "active" },
      orderBy: { createdAt: "desc" },
    });
    const userTier = enrollment?.tier || "free";
    if (userTier !== "academy" && userTier !== "one_to_one") {
      return NextResponse.json({ error: "Acces reserve aux membres Academy et One-to-One" }, { status: 403 });
    }
  }

  try {
    // Rate limit by userId
    const { allowed, remaining } = checkRateLimit(session.user.id);

    if (!allowed) {
      return NextResponse.json(
        { error: "Tu as atteint la limite de 20 messages par jour. Reviens demain !", remaining: 0 },
        { status: 429 }
      );
    }

    const { messages } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not configured" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        maxOutputTokens: 200,
        temperature: 0.7,
      },
    });

    // Keep only last 4 messages for context (save tokens)
    const history = messages
      .filter((m: { role: string }) => m.role === "user" || m.role === "assistant")
      .slice(-4)
      .map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

    const lastMessage = history.pop();
    if (!lastMessage) {
      return NextResponse.json({ error: "No message provided" }, { status: 400 });
    }

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
        { role: "model", parts: [{ text: "Compris, je donne des conseils courts et je redirige vers les modules." }] },
        ...history,
      ],
    });

    const sanitizedContent = lastMessage.parts[0].text.slice(0, 500);
    const result = await chat.sendMessage(sanitizedContent);
    const response = result.response.text();

    return NextResponse.json({ content: response, remaining });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
