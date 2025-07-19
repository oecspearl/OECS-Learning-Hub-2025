import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath = path === "/" || 
    path === "/login" || 
    path === "/register" || 
    path.startsWith("/_next") ||
    path.startsWith("/api") ||
    path.includes(".")

  // Check if user is authenticated using NextAuth.js
  const token = await getToken({ req: request })
  const isAuthenticated = !!token

  // If the path is not public and user is not authenticated, redirect to login
  if (!isPublicPath && !isAuthenticated) {
    const url = new URL("/login", request.url)
    url.searchParams.set("callbackUrl", path)
    return NextResponse.redirect(url)
  }

  // If the path is public and user is authenticated, redirect to dashboard
  if (isAuthenticated && (path === "/login" || path === "/register")) {
    const userRole = token?.role?.toLowerCase()
    return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url))
  }

  // Check admin access for admin routes
  if (path.startsWith("/admin")) {
    const userRole = token?.role?.toLowerCase()
    if (userRole !== "admin") {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  // Handle role-based access for dashboard routes
  if (path.startsWith("/dashboard")) {
    const userRole = token?.role?.toLowerCase()

    // If no role is set, redirect to login
    if (!userRole) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    // Handle teacher routes
    if (path.startsWith("/dashboard/teacher") && userRole !== "teacher") {
      return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url))
    }

    // Handle parent routes
    if (path.startsWith("/dashboard/parent") && userRole !== "parent") {
      return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url))
    }

    // If user is authenticated but trying to access /dashboard without a role path,
    // redirect to their role-specific dashboard
    if (path === "/dashboard") {
      return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
