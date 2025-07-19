import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ErrorBoundary } from "@/components/error-boundary"
import { Providers } from "@/components/providers"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { AssistantProvider } from '@/contexts/AssistantContext'
import { AssistantWrapper } from '@/components/assistant/AssistantWrapper'
import { SkipToContent } from '@/components/skip-to-content'
import { AccessibilityToolbar } from '@/components/accessibility-toolbar'
import { KeyboardIndicator } from '@/components/keyboard-indicator'
import { GlobalSearch } from '@/components/global-search'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OECS Learning Hub",
  description: "A platform for OECS teachers to share and access educational resources",
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favlogo.png', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  themeColor: '#4F46E5',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="6nips6bsHw"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ErrorBoundary>
          <Providers>
            <AssistantProvider>
              <SkipToContent />
              <KeyboardIndicator />
              <GlobalSearch />
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1" tabIndex={-1}>{children}</main>
                <Footer />
              </div>
              {session?.user && (
                <AssistantWrapper
                  userRole={session.user.role || 'user'}
                  theme={{
                    primary: '#4F46E5',
                    secondary: '#818CF8',
                    background: '#FFFFFF',
                    text: '#1F2937',
                  }}
                />
              )}
              <AccessibilityToolbar />
            </AssistantProvider>
            <Toaster />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  )
}
