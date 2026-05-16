import { readFileSync } from "node:fs";
import { join } from "node:path";

// Serves the KARiSUMA static landing at "/".
// HTML lives at src/app/landing.html; read once at module init time.
// On Vercel, process.cwd() is the function's root and src/ is part of the bundle context.
const landingHtml = readFileSync(
  join(process.cwd(), "src", "app", "landing.html"),
  "utf-8"
);

export const dynamic = "force-static";

export async function GET() {
  return new Response(landingHtml, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
