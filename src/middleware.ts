export { default } from "next-auth/middleware";

// middleware.js
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  // Get the admin cookie id from the request.
  const authorizationCookie = request.cookies.get(
    "next-auth.session-token"
  )?.value;
  // const allCookies = request.cookies.getAll();

  // If the auth cookie id is not "abcdefg", redirect the user to the admin login page.
  if (!authorizationCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/meus-imoveis/:path*",
    "/meus-relatorios/:path*",
    "/novo-imovel/:path*",
    "/profile/:path*",
  ],
};
