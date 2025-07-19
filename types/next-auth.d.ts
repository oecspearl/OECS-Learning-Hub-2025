import type { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface User {
    id: string
    name: string
    email: string
    role: string
    created_at: string
    updated_at: string
  }

  interface Session {
    user: {
      id: string
      name: string
      email: string
      role: string
      created_at: string
      updated_at: string
    } & DefaultSession["user"]
  }
}
