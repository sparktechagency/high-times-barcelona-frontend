import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
      // console.log('Middleware running');

      const token = cookies().get('accessToken')?.value;
      // console.log('Token:', token);

      if (!token) {
            console.log('No token found, redirecting...');
            return NextResponse.redirect(new URL('/', request.url));
      }

      return NextResponse.next();
}

export const config = {
      matcher: [
            '/dashboard/:path*',
            '/blogs-management/:path*',
            '/faqs-management/:path*',
            '/faq-details/:path*',
            '/privacy-policy-management/:path*',
            '/terms-and-conditions-management/:path*',
      ],
};
