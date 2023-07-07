export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/meus-imoveis/:path*",
    "/meus-relatorios/:path*",
    "/novo-imovel/:path*",
    "/profile/:path*",
  ],
};
