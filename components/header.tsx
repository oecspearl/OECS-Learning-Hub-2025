"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import { UserNav } from "@/components/user-nav"
import { GlobalSearch } from "@/components/global-search"
import { AccessibilityToolbar } from "@/components/accessibility-toolbar"
import { Search, Sun, Moon, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const { user, loading } = useAuth()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    // You can add actual theme switching logic here
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-green-600 shadow-lg p-4">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-3">
            {/* OECS Logo */}
            <div className="flex items-center space-x-2">
              <img src="/oecsnavlogo.png" alt="OECS Logo" className="h-14 w-auto" />
            </div>
            <span className="text-white text-sm font-medium hidden sm:block">Powered by AI</span>
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-green-200 transition-colors font-medium">
            Home
          </Link>
          <Link href="/curriculum" className="text-white hover:text-green-200 transition-colors font-medium">
            Curriculum
          </Link>
          <Link href="/resources" className="text-white hover:text-green-200 transition-colors font-medium">
            Resources
          </Link>
          <Link href="/innovative-tools" className="text-white hover:text-green-200 transition-colors font-medium">
            Innovative Tools
          </Link>
          <Link href="/help" className="text-white hover:text-green-200 transition-colors font-medium">
            Help
          </Link>
        </nav>

        {/* Right Side Interactive Elements */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="text-white hover:text-green-200 transition-colors">
            <Search className="h-5 w-5" />
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="text-white hover:text-green-200 transition-colors"
          >
            {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-green-200 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Login Button */}
          {!loading && (
            <>
              {user ? (
                <UserNav />
              ) : (
                <Button 
                  asChild 
                  className="bg-white text-green-600 hover:bg-green-50 font-medium"
                >
                  <Link href="/login">Login</Link>
                </Button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-700 border-t border-green-500">
          <nav className="container px-4 py-4 space-y-4">
            <Link 
              href="/" 
              className="block text-white hover:text-green-200 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/curriculum" 
              className="block text-white hover:text-green-200 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Curriculum
            </Link>
            <Link 
              href="/resources" 
              className="block text-white hover:text-green-200 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              href="/innovative-tools" 
              className="block text-white hover:text-green-200 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Innovative Tools
            </Link>
            <Link 
              href="/help" 
              className="block text-white hover:text-green-200 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Help
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
