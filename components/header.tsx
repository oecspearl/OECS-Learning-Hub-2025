"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import { UserNav } from "@/components/user-nav"
import { GlobalSearch } from "@/components/global-search"
import { AccessibilityToolbar } from "@/components/accessibility-toolbar"

export function Header() {
  const { user, loading } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <img src="/images/oecsnavlogo.png" alt="OECS Logo" className="h-8 w-auto" />
            <span className="hidden font-bold sm:inline-block">
              OECS Learning Hub
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <GlobalSearch />
          <div className="flex items-center space-x-2">
            {!loading && (
              <>
                {user ? (
                  <UserNav />
                ) : (
                  <div className="flex items-center space-x-2">
                    <Button asChild variant="ghost">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/register">Register</Link>
                    </Button>
                  </div>
                )}
              </>
            )}
            <AccessibilityToolbar />
          </div>
        </div>
      </div>
    </header>
  )
}
