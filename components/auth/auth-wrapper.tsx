"use client"

import type { ReactNode } from "react"

interface AuthWrapperProps {
  children: ReactNode
}

export function AuthWrapper({ children }: AuthWrapperProps) {
  // For now, we'll just render the children without authentication
  // This can be extended later to include actual authentication logic
  return <>{children}</>
}
