"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname()

  // Skip rendering breadcrumbs on the homepage
  if (pathname === "/") {
    return null
  }

  // If items are provided, use them directly
  if (items) {
    return (
      <nav aria-label="Breadcrumb" className="flex items-center text-sm text-black">
        <ol className="flex items-center space-x-1">
          <li>
            <Link href="/" className="flex items-center hover:text-black">
              <Home size={16} />
              <span className="sr-only">Home</span>
            </Link>
          </li>

          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight size={16} className="mx-1" />
              {index === items.length - 1 ? (
                <span aria-current="page" className="font-medium text-black">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-black">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  }

  // Otherwise, generate breadcrumbs from pathname
  const segments = pathname
    .split("/")
    .filter((segment) => segment !== "")
    .map((segment) => {
      // Format the segment for display (replace hyphens with spaces and capitalize)
      const formattedSegment = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      // Handle special cases
      if (segment.startsWith("grade")) {
        return { path: segment, label: `Grade ${segment.replace("grade", "")}` }
      }

      return { path: segment, label: formattedSegment }
    })

  // Build the breadcrumb paths
  const breadcrumbs = segments.map((segment, index) => {
    const href =
      "/" +
      segments
        .slice(0, index + 1)
        .map((s) => s.path)
        .join("/")
    return { href, label: segment.label }
  })

  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm text-black">
      <ol className="flex items-center space-x-1">
        <li>
          <Link href="/" className="flex items-center hover:text-black">
            <Home size={16} />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            <ChevronRight size={16} className="mx-1" />
            {index === breadcrumbs.length - 1 ? (
              <span aria-current="page" className="font-medium text-black">
                {breadcrumb.label}
              </span>
            ) : (
              <Link href={breadcrumb.href} className="hover:text-black">
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
