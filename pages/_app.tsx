import { AppProps } from "next/dist/shared/lib/router/router";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
