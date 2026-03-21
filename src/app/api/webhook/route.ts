import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import Stripe from "stripe";

const PLAN_TO_TIER: Record<string, string> = {
  starter: "starter",
  academy: "academy",
  one_to_one: "one_to_one",
};

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`Webhook signature verification failed: ${message}`);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const userId = session.metadata?.userId;
    const plan = session.metadata?.plan;

    if (!userId || !plan) {
      console.error("Missing userId or plan in checkout session metadata");
      return NextResponse.json({ error: "Missing metadata" }, { status: 400 });
    }

    const tier = PLAN_TO_TIER[plan];
    if (!tier) {
      console.error(`Unknown plan: ${plan}`);
      return NextResponse.json({ error: "Unknown plan" }, { status: 400 });
    }

    try {
      await prisma.enrollment.create({
        data: {
          userId,
          tier,
          status: "active",
        },
      });

      await prisma.user.update({
        where: { id: userId },
        data: { emailVerified: true },
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      console.error(`Failed to create enrollment: ${message}`);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
