import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { db } from "@/lib/db"
import { compare } from "bcryptjs"
import { 
  logLoginSuccess, 
  logLoginFailure, 
  logOAuthSuccess, 
  logOAuthFailure, 
  logUserCreation, 
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
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        try {
          console.log("Processing Google OAuth sign in for:", user.email)
          
          // Check if user exists in our database
          const existingUser = await db.users.findFirst({
            email: user.email!
          })

          await logUserLookup(user.email!, !!existingUser)

          if (!existingUser) {
            console.log("Creating new user from Google OAuth")
            try {
              // Create new user in our database
              const newUser = await db.users.create({
                name: user.name!,
                email: user.email!,
                password_hash: "google_oauth_user", // Placeholder for OAuth users
                role: "teacher", // Default role for Google users
              })
              
              console.log("Created new user from Google OAuth:", newUser)
              await logUserCreation(user.email!, "google", newUser.id.toString())
              await logOAuthSuccess(user.email!, "google", newUser.id.toString())
            } catch (createError) {
              console.error("Failed to create user in database:", createError)
              await logOAuthFailure(user.email!, "google", createError instanceof Error ? createError.message : "Database creation failed")
              
              // If RLS is blocking, we'll still allow the sign-in
              // The user can be created later through admin interface
              console.log("Allowing sign-in despite database creation failure")
              return true
            }
          } else {
            console.log("Existing user found:", existingUser)
            await logOAuthSuccess(user.email!, "google", existingUser.id.toString())
          }
          
          return true
        } catch (error) {
          console.error("Error handling Google OAuth:", error)
          await logOAuthFailure(user.email!, "google", error instanceof Error ? error.message : "OAuth processing failed")
          // Don't block the sign-in if there's a database error
          return true
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