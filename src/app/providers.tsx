"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { Provider as JotaiProvider } from "jotai";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <CacheProvider>
        <ChakraProvider>
          <SessionProvider>{children}</SessionProvider>
        </ChakraProvider>
      </CacheProvider>
    </JotaiProvider>
  );
}
