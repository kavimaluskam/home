import { Avatar, Heading, HStack, Stack, Text } from "@chakra-ui/react";

interface BioProps {
  headline: string;
  description: string;
}

const Bio = ({ headline, description }: BioProps) => {
  return (
    <HStack padding={5} bg="black" borderRadius="lg" spacing={5}>
      <Avatar size="xl" name="kavimaluskam" src="/avatar.jpeg" />
      <Stack>
        <Heading fontSize="2xl">{headline}</Heading>
        <Text fontSize="md">{description}</Text>
      </Stack>
    </HStack>
  );
};

export default Bio;
