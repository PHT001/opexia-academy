import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

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
    "/assistant/:path*",
    "/coaching/:path*",
    "/templates/:path*",
    "/generateur/:path*",
    "/certificats/:path*",

    "/pipeline/:path*",
    "/parrainage/:path*",
    "/leaderboard/:path*",
    "/projets/:path*",
  ],
};
