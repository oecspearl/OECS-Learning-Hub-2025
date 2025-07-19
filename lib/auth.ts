import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { db } from "@/lib/db"
import { compare } from "bcrypt"

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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials")
        }

        try {
          const user = await db.users.findFirst({
            email: credentials.email
          })

          if (!user) {
            throw new Error("Invalid email or password")
          }

          const isPasswordValid = await compare(
            credentials.password,
            user.password_hash
          )

          if (!isPasswordValid) {
            throw new Error("Invalid email or password")
          }

          // Normalize the role to lowercase and ensure ID is a string
          const normalizedRole = user.role.toLowerCase()
          const userId = user.id.toString()

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
          throw error
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        try {
          // Check if user exists in our database
          const existingUser = await db.users.findFirst({
            email: user.email!
          })

          if (!existingUser) {
            // Create new user in our database
            const newUser = await db.users.create({
              name: user.name!,
              email: user.email!,
              password_hash: "google_oauth_user", // Placeholder for OAuth users
              role: "teacher", // Default role for Google users
            })
            
            console.log("Created new user from Google OAuth:", newUser)
          } else {
            console.log("Existing user found:", existingUser)
          }
          
          return true
        } catch (error) {
          console.error("Error handling Google OAuth:", error)
          return false
        }
      }
      return true
    },
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