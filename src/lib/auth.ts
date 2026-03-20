import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // DEV BYPASS — skip DB lookup in development
        if (process.env.NODE_ENV === "development") {
          return {
            id: "dev-admin",
            email: credentials.email,
            name: "Admin Opexia",
            role: "admin",
            createdAt: new Date().toISOString(),
          };
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) return null;

        const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword);
        if (!passwordMatch) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          createdAt: user.createdAt.toISOString(),
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
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
              role: "user",
            },
          });
          user.id = created.id;
          (user as any).role = created.role;
          (user as any).createdAt = created.createdAt.toISOString();
        } else {
          user.id = existing.id;
          (user as any).role = existing.role;
          (user as any).createdAt = existing.createdAt.toISOString();
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role as string;
        token.createdAt = (user as any).createdAt as string;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.createdAt = token.createdAt as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
