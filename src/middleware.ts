import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    if (token && token.emailVerified === false && token.role !== "admin" && !pathname.startsWith("/verify-email") && !pathname.startsWith("/api/")) {
      return NextResponse.redirect(new URL("/verify-email", req.url));
    }

    if (pathname.startsWith("/admin") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/lessons/:path*",
    "/quiz/:path*",
    "/admin/:path*",
    "/profile/:path*",
    "/congratulations/:path*",
    "/favoris/:path*",
    "/notes/:path*",
    "/ressources/:path*",
    "/masterclass/:path*",

    "/coaching/:path*",
    "/templates/:path*",
    "/generateur/:path*",
    "/certificats/:path*",

    "/pipeline/:path*",
    "/parrainage/:path*",
    "/leaderboard/:path*",
    "/projets/:path*",
    "/offres/:path*",
  ],
};
