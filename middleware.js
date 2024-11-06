import {
  clerkMiddleware,
  createRouteMatcher,
  clerkClient
} from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Create a matcher for protected routes
const isProtectedRoute = createRouteMatcher([
  '/admin(.*)',
]);

export default clerkMiddleware(async ({ userId }, req) => {
  console.log('Middleware triggered for URL:', req.url);

  if (isProtectedRoute(req)) {
    console.log('Protected route detected:', req.url);

    if (!userId) {
      console.log('User not authenticated, redirecting to sign-in.');
      return NextResponse.redirect(new URL('/sign-in', req.url));
    }

    const users = await clerkClient.users.getUserList();
    const userRole = users.find((user) => user.id === userId)?.publicMetadata?.role;

    if (userRole !== 'admin') {
      console.log('User is not an admin, redirecting to home.');
      return NextResponse.redirect(new URL('/', req.url));
    }

    console.log('User authenticated and authorized, allowing access.');
    return NextResponse.next();
  }

  // For non-protected routes, allow access
  console.log('Non-protected route, allowing access.');
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)', // Matches all pages except _next resources
  ],
};
