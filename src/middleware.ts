import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if accessing admin routes
  if (pathname.startsWith('/admin')) {
    const token =
      request.cookies.get('admin_token')?.value ||
      request.headers.get('authorization')?.replace('Bearer ', '');

    // Redirect to login if no token and not already on login page
    if (!token && !pathname.startsWith('/admin/login')) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Redirect to dashboard if trying to access login with valid token
    if (token && pathname.startsWith('/admin/login')) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
  }

  // Add security headers
  const response = NextResponse.next();

  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
