import { AppProps } from "next/dist/shared/lib/router/router";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "../styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
