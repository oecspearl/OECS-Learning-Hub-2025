"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import { Breadcrumb } from "@/components/breadcrumb"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserProfileDropdown } from "@/components/user-profile-dropdown"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Search, ChevronDown, LayoutDashboard, BookOpen, FileEdit, FileCheck, MessageSquare, Users, BarChart, Settings, Wrench } from "lucide-react"
import { useState } from "react"
import { SearchDialog } from "@/components/search-dialog"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname() || "/"
  const { data: session } = useSession()
  const userRole = session?.user?.role?.toLowerCase()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "Resources", href: "/resources" },
    { name: "Innovative Tools", href: "/innovative-tools" }
  ]

  // Define dashboard items based on user role
  const getDashboardItems = () => {
    const baseItems = [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: <LayoutDashboard className="h-4 w-4" />
      },
      {
        name: "Profile",
        href: "/profile",
        icon: <Users className="h-4 w-4" />
      }
    ]

    const teacherItems = [
      {
        name: "My Classes",
        href: "/dashboard/teacher/classes",
        icon: <BookOpen className="h-4 w-4" />
      },
      {
        name: "Lesson Plans",
        href: "/dashboard/teacher/lesson-plans",
        icon: <FileEdit className="h-4 w-4" />
      },
      {
        name: "Assessments",
        href: "/dashboard/teacher/assessments",
        icon: <FileCheck className="h-4 w-4" />
      },
      {
        name: "Feedback",
        href: "/dashboard/teacher/feedback",
        icon: <MessageSquare className="h-4 w-4" />
      }
    ]

    const adminItems = [
      {
        name: "Overview",
        href: "/admin",
        icon: <LayoutDashboard className="h-4 w-4" />
      },
      {
        name: "User Management",
        href: "/admin/users",
        icon: <Users className="h-4 w-4" />
      },
      {
        name: "Curriculum Management",
        href: "/curriculum",
        icon: <BookOpen className="h-4 w-4" />
      },
      {
        name: "Analytics",
        href: "/admin/analytics",
        icon: <BarChart className="h-4 w-4" />
      },
      {
        name: "System Settings",
        href: "/admin/settings",
        icon: <Settings className="h-4 w-4" />
      }
    ]

    switch (userRole) {
      case "teacher":
        return [...baseItems, ...teacherItems]
      case "admin":
        return [...baseItems, ...adminItems]
      default:
        return baseItems
    }
  }

  const dashboardItems = getDashboardItems()

  return (
    <>
      <header className="bg-green-600 border-b">
        <div className="w-full px-4">
          <div className="flex h-24 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/oecsnavlogo.png"
                  alt="OECS Logo"
                  width={64}
                  height={64}
                  className="h-16 w-auto"
                  priority
                />
                <span className="text-base font-bold text-white">Powered by AI</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center flex-1 justify-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-3 text-base font-medium rounded-md ${
                    pathname === item.href || pathname.startsWith(`${item.href}/`)
                      ? "text-white bg-green-700"
                      : "text-green-100 hover:bg-green-700 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Dashboard Dropdown for logged-in users */}
              {session?.user && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="px-3 py-3 text-base font-medium rounded-md text-green-100 hover:bg-green-700 hover:text-white flex items-center gap-2"
                    >
                      Dashboard
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {dashboardItems.map((item, index) => (
                      <DropdownMenuItem key={index} asChild>
                        <Link href={item.href} className="flex items-center gap-2">
                          {item.icon}
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </nav>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="text-white hover:bg-green-700"
              >
                <Search className="h-6 w-6" />
              </Button>
              <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
              <ThemeToggle />
              <UserProfileDropdown />

              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                  className="text-white hover:bg-green-700"
                >
                  <Menu className="h-7 w-7" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-3 space-y-1 w-full">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block w-full px-3 py-3 text-lg font-medium rounded-md ${
                    pathname === item.href || pathname.startsWith(`${item.href}/`)
                      ? "text-white bg-green-700"
                      : "text-green-100 hover:bg-green-700 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Dashboard Items */}
              {session?.user && (
                <>
                  <div className="px-3 py-2 text-sm font-medium text-green-100 border-t border-green-500 mt-4">
                    Dashboard
                  </div>
                  {dashboardItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block w-full px-6 py-3 text-lg font-medium rounded-md ${
                        pathname === item.href || pathname.startsWith(`${item.href}/`)
                          ? "text-white bg-green-700"
                          : "text-green-100 hover:bg-green-700 hover:text-white"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </header>
      <div className="w-full bg-white border-b">
        <div className="container mx-auto px-4 h-12 flex items-center justify-between">
          <Breadcrumb />
          <Link 
            href="/dashboard" 
            className="text-black hover:text-green-600 font-medium flex items-center gap-2"
          >
            <span>Dashboard</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}
