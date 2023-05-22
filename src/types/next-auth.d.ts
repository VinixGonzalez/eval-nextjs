import NextAuth from "next-auth/next";
import { JWT } from "next-auth/jwt";
import { DefaultSession } from "next-auth";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** Access Token */
    accessToken?: string;
  }
}

declare module "next-auth" {
  interface User {
    accessToken: string;
    status?: string | number;
  }
}
