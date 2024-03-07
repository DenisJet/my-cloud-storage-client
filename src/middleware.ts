import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const currentToken = request.cookies.get('_token')?.value;

  if (currentToken && !request.nextUrl.pathname.startsWith('/storage')) {
    return Response.redirect(new URL('/', request.url));
  }

  if (!currentToken && request.nextUrl.pathname.startsWith('/storage')) {
    return Response.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
