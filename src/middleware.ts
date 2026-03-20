import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

// DEV BYPASS — remove before deploying to production
const DEV_BYPASS = process.env.NODE_ENV === "development";

function devMiddleware(req: NextRequest) {
  return NextResponse.next();
}

const authMiddleware = withAuth(
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

export default DEV_BYPASS ? devMiddleware : authMiddleware;

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
    "/intervenants/:path*",
    "/assistant/:path*",
    "/coaching/:path*",
    "/templates/:path*",
    "/generateur/:path*",
    "/marketplace/:path*",
    "/certificats/:path*",
  ],
};
