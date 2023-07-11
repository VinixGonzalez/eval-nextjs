"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { Provider as JotaiProvider } from "jotai";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <SessionProvider>
          <JotaiProvider>{children}</JotaiProvider>
        </SessionProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
