import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

const providers: NextAuthOptions["providers"] = [];

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  );
}

providers.push(
  CredentialsProvider({
    name: "credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Mot de passe", type: "password" },
    },
    async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) return null;

      const user = await prisma.user.findUnique({
        where: { email: credentials.email },
        select: { id: true, email: true, name: true, role: true, hashedPassword: true, emailVerified: true, createdAt: true },
      });
      if (!user) return null;

      if (!user.hashedPassword) return null;
      const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword);
      if (!passwordMatch) return null;

      // Allow login even if email not verified — verification page needs session
      // Access control for unverified emails is handled by middleware

      return {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        emailVerified: user.emailVerified,
        createdAt: user.createdAt.toISOString(),
      };
    },
  })
);

export const authOptions: NextAuthOptions = {
  providers,
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },
  jwt: { maxAge: 24 * 60 * 60 },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const email = user.email;
        if (!email) return false;
        const existing = await prisma.user.findUnique({ where: { email } });
        if (!existing) {
          const created = await prisma.user.create({
            data: {
              email,
              name: user.name || email.split("@")[0],
              hashedPassword: "",
              role: "student",
              emailVerified: true,
            },
          });
          user.id = created.id;
          (user as any).role = created.role;
          (user as any).createdAt = created.createdAt.toISOString();
          // Create free enrollment for new Google users
          await prisma.enrollment.create({
            data: { userId: created.id, tier: "free", status: "active" },
          });
        } else {
          user.id = existing.id;
          (user as any).role = existing.role;
          (user as any).createdAt = existing.createdAt.toISOString();
        }
      }
      return true;
    },
    async jwt({ token, user, trigger, session: updateData }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role as string;
        token.emailVerified = (user as any).emailVerified as boolean;
        token.createdAt = (user as any).createdAt as string;
      }

      // Handle client-side session update (e.g. name change)
      if (trigger === "update" && updateData?.name) {
        token.name = updateData.name;
      }

      // Verify user still exists in DB and refresh tier
      if (token.sub) {
        const dbUser = await prisma.user.findUnique({
          where: { id: token.sub },
          select: { id: true, emailVerified: true, name: true },
        });
        if (!dbUser) {
          // User was deleted — invalidate the token
          return { ...token, id: "", role: "", sub: "" };
        }
        token.emailVerified = dbUser.emailVerified;
        if (dbUser.name) token.name = dbUser.name;

        // Refresh tier from active enrollment
        const enrollment = await prisma.enrollment.findFirst({
          where: { userId: token.sub, status: "active" },
          orderBy: { createdAt: "desc" },
          select: { tier: true },
        });
        token.tier = enrollment?.tier || "free";
      }

      return token;
    },
    async session({ session, token }) {
      // If user was deleted, return empty session to force logout
      if (!token.sub || token.sub === "") {
        return { ...session, user: undefined } as any;
      }
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.emailVerified = token.emailVerified as boolean;
        session.user.createdAt = token.createdAt as string;
        session.user.tier = token.tier as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
