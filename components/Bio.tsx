import { Avatar, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import siteMetadata from "../configs/siteMetadata";

const Bio = () => {
  return (
    <HStack padding={5} bg="black" borderRadius="lg" spacing={5}>
      <Avatar size="xl" name="kavimaluskam" src="/avatar.jpeg" />
      <Stack>
        <Heading fontSize="2xl">{siteMetadata.bio.headline}</Heading>
        {siteMetadata.bio.descriptions.map((description) => (
          <Text fontSize="sm">{description}</Text>
        ))}
      </Stack>
    </HStack>
  );
};

export default Bio;
