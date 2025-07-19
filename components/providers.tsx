"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { SessionProvider } from "next-auth/react"
import { ToastProviderWrapper } from "@/components/toast-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider refetchInterval={0} refetchOnWindowFocus={false}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <ToastProviderWrapper>{children}</ToastProviderWrapper>
      </ThemeProvider>
    </SessionProvider>
  )
} 