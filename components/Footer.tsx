import { Link, Box } from "@chakra-ui/react";
import siteMetadata from "../configs/siteMetadata";

const Footer = () => {
  return (
    <Box mt={20} mb={10} width="100%" textAlign="center" color="gray.500">
      Build with{" "}
      <Link textDecoration="underline" href="https://nextjs.org/">
        Next.js
      </Link>
      {" & "}
      <Link textDecoration="underline" href="https://chakra-ui.com/">
        Chakra UI
      </Link>
    </Box>
  );
};

export default Footer;
