export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwtoken from "jsonwebtoken";

export async function middleware(request: NextRequest) {
  console.log("Checando middleware 🔑");

  const { pathname } = request.nextUrl;

  const hasToken =
    request.cookies.has("next-auth.session-token") ||
    request.cookies.has("__Secure-next-auth.session-token");

  if (pathname === "/login" && hasToken) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (pathname === "/login" && !hasToken) {
    return NextResponse.next();
  }

  const tokenEncapsulated: any = await getToken({
    req: request,
    secret: process.env.SECRET,
  });

  const tokenFromJwt: any = jwtoken.decode(
    tokenEncapsulated?.accessToken.split(" ")[1]
  );
  const tokenExpiration = new Date(tokenFromJwt?.exp * 1000);

  console.log(
    `TOKENS 🔑: encapsulated: ${JSON.stringify(
      tokenEncapsulated
    )}; fromJwt: ${JSON.stringify(
      tokenFromJwt
    )}; expiration: ${tokenExpiration}`
  );

  // no token || expired
  if (!hasToken || new Date() > new Date(tokenExpiration)) {
    console.log("Sem Token! Limpando cookies e redirecionando para login ⚠");
    request.cookies.clear();
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // TODO: Remover e testar, validação redundante neste ponto
  if (pathname.startsWith("/_next") || pathname === "/favicon.ico")
    return NextResponse.next();

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/meus-imoveis/:path*",
    "/meus-relatorios/:path*",
    "/novo-imovel/:path*",
    "/profile/:path*",
  ],
  runtime: "nodejs",
  unstable_allowDynamic: [
    "/node_modules/lodash/**",
    "/node_modules/jsonwebtoken/**",
  ],
};
