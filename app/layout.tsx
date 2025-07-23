import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'
import { Toaster } from '@/components/ui/toaster'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AssistantWrapper } from '@/components/assistant/AssistantWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OECS Learning Hub',
  description: 'A comprehensive learning platform for OECS educators',
  icons: {
    icon: [
      {
        url: '/favlogo.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/favlogo.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main className="min-h-screen flex flex-col">
            {children}
          </main>
          <Footer />
          <Toaster />
          <AssistantWrapper 
            theme={{
              primary: '#13af09',
              secondary: '#818CF8',
              background: '#FFFFFF',
              text: '#1F2937',
            }}
          />
        </AuthProvider>
      </body>
    </html>
  )
}
