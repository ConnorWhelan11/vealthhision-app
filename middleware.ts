import { NextResponse } from 'next/server';

export function middleware(request) {
  // Your middleware logic here
  // For example, you could check for a specific header, query parameter, etc.

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
