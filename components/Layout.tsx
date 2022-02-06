// blogs.tsx

import React, { ReactChild } from "react";

import { Box } from "@chakra-ui/react";

import Footer from "../components/Footer";

const Layout = ({ children }: { children: ReactChild }) => {
  return (
    <Box maxW={{ sm: "90%", md: "80%", lg: "60%" }} mx="auto" mt={8} px={3}>
      <Box
        background="linear-gradient(319deg, rgb(255 51 98 / 8%) 10%, rgb(255 235 0 / 0%) 50%), linear-gradient(20deg, rgb(255 200 0 / 13%) 5%, rgb(255 212 0 / 0%) 40%)"
        position="fixed"
        top={0}
        right={0}
        bottom={0}
        left={0}
        zIndex={-1}
      ></Box>
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
