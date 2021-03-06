import { Avatar, Heading, HStack, Link, Stack, Text } from "@chakra-ui/react";
import siteMetadata from "../configs/siteMetadata";

const Bio = () => {
  return (
    <HStack padding={5} bg="black" borderRadius="lg" spacing={5}>
      <Link href={siteMetadata.bio.twitter} isExternal={true}>
        <Avatar
          size="xl"
          name={siteMetadata.bio.name}
          src={siteMetadata.bio.avatar}
        />
      </Link>
      <Stack spacing={2}>
        <Heading fontSize="xl">{siteMetadata.bio.headline}</Heading>
        {siteMetadata.bio.descriptions.map((description, i) => (
          <Text fontSize="sm" key={i}>
            {description}
          </Text>
        ))}
      </Stack>
    </HStack>
  );
};

export default Bio;
