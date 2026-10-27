"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { ReactNode } from "react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "var(--paper)",
        color: "var(--ink)",
        fontFamily: '"DM Sans", sans-serif',
        margin: 0,
        WebkitFontSmoothing: "antialiased",
      },
    },
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      {children}
    </ChakraProvider>
  );
}
