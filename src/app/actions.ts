"use server";

import { cookies } from "next/headers";

interface CookieData {
  key: string;
  value?: string;
}

export async function createCookie({ key, value }: CookieData) {
  "use server";
  cookies().set(key, value as string);
}
export async function removeCookie({ key }: CookieData) {
  "use server";
  cookies().set({
    name: key,
    value: "",
    maxAge: 0,
  });
}
