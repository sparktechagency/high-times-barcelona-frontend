import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Create the next-intl middleware
const intlMiddleware = createMiddleware(routing);

// Paths that require authentication
const protectedPaths = [
      '/dashboard',
      '/blogs-management',
      '/faqs-management',
      '/faq-details',
      '/privacy-policy-management',
      '/terms-and-conditions-management',
];

export async function middleware(request: NextRequest) {
      const pathname = request.nextUrl.pathname;

      // Check if the path needs authentication
      const isProtectedPath = protectedPaths.some((path) => pathname.startsWith(path));

      if (isProtectedPath) {
            const token = cookies().get('accessToken')?.value;

            if (!token) {
                  return NextResponse.redirect(new URL('/', request.url));
            }
      }

      // After authentication check, handle internationalization
      return intlMiddleware(request);
}

export const config = {
      matcher: [
            // Match all pathnames except for
            // - /api (API routes)
            // - /_next (Next.js internals)
            // - /_vercel (Vercel internals)
            // - /static (public files)
            // - .*\\..*$ (files with extensions)
            '/((?!api|_next|_vercel|static|.*\\..*$).*)',
            // Match all internationalized routes
            '/(en|es|fr|it|de)/:path*',
      ],
};
