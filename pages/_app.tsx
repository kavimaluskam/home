import Head from "next/head";

import { AppProps } from "next/dist/shared/lib/router/router";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { theme } from "../styles/theme";

const SEO = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      {/* Primary Meta Tags */}
      <title>@kavimaluskam</title>
      <meta name="title" content="@kavimaluskam" />
      <meta
        name="description"
        content="Data engineer. Interested in general Techs, Web3, Gym, Manga, Music. From 🇭🇰"
      />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kavimaluskam.dev/" />
      <meta property="og:title" content="@kavimaluskam" />
      <meta
        property="og:description"
        content="Data engineer. Interested in general Techs, Web3, Gym, Manga, Music. From 🇭🇰"
      />
      <meta property="og:image" content="social.jpeg" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://kavimaluskam.dev/" />
      <meta property="twitter:title" content="@kavimaluskam" />
      <meta
        property="twitter:description"
        content="Data engineer. Interested in general Techs, Web3, Gym, Manga, Music. From 🇭🇰"
      />
      <meta property="twitter:image" content="social.jpeg" />
      {/* Favicon Images */}
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        href="favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="favicon-16x16.png"
        sizes="16x16"
      />
      <meta name="application-name" content=" " />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="mstile-150x150.png" />
      <meta
        name="msapplication-square150x150logo"
        content="mstile-150x150.png"
      />
      {/*
manifest.json provides metadata used when your web app is installed on a
user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
*/}
      <link rel="manifest" href="manifest.json" />
    </Head>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <SEO />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
