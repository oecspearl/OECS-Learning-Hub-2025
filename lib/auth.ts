import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { db } from "@/lib/db"
import { compare } from "bcryptjs"
import { 
  logLoginSuccess, 
  logLoginFailure, 
  logUserLookup 
} from "@/lib/auth-logger"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      role: string
    }
  }
  interface User {
    id: string
    email: string
    name: string
    role: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: string
  }
}

export const authOptions: NextAuthOptions = {
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing credentials")
          await logLoginFailure(credentials?.email || "unknown", "credentials", "Missing credentials")
          throw new Error("Missing credentials")
        }

        try {
          console.log("Attempting to find user:", credentials.email)
          
          const user = await db.users.findFirst({
            email: credentials.email
          })

          console.log("User lookup result:", user ? "Found" : "Not found")
          await logUserLookup(credentials.email, !!user)

          if (!user) {
            console.log("User not found:", credentials.email)
            await logLoginFailure(credentials.email, "credentials", "User not found")
            throw new Error("Invalid email or password")
          }

          console.log("Comparing passwords...")
          const isPasswordValid = await compare(
            credentials.password,
            user.password_hash
          )

          console.log("Password validation result:", isPasswordValid)

          if (!isPasswordValid) {
            console.log("Invalid password for user:", credentials.email)
            await logLoginFailure(credentials.email, "credentials", "Invalid password")
            throw new Error("Invalid email or password")
          }

          // Normalize the role to lowercase and ensure ID is a string
          const normalizedRole = user.role.toLowerCase()
          const userId = user.id.toString()

          console.log("Authentication successful for user:", user.name)
          await logLoginSuccess(credentials.email, "credentials", userId)

          return {
            id: userId,
            email: user.email,
            name: user.name,
            role: normalizedRole,
            created_at: user.created_at,
            updated_at: user.updated_at,
          }
        } catch (error) {
          console.error("Auth error:", error)
          await logLoginFailure(credentials.email, "credentials", error instanceof Error ? error.message : "Unknown error")
          throw error
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
        token.role = user.role.toLowerCase()
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    }
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === "production" 
        ? "__Secure-next-auth.session-token"
        : "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production"
      }
    }
  }
} 