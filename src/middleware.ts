export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

// middleware.js
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwtoken from "jsonwebtoken";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  debugger;
  const tokenEncapsulated: any = await getToken({
    req: request,
    secret: process.env.SECRET,
  });

  const tokenFromJwt: any = jwtoken.decode(
    tokenEncapsulated?.accessToken.split(" ")[1]
  );
  const tokenExpiration = new Date(tokenFromJwt?.exp * 1000);

  console.log("Checando middleware 🔑");

  // no token || expired
  if (
    !tokenEncapsulated ||
    !tokenFromJwt ||
    !request.cookies.has("next-auth.session-token") ||
    new Date() > new Date(tokenExpiration)
  ) {
    request.cookies.clear();
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
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
