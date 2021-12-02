import { Avatar, Heading, HStack, Spacer, Stack } from "@chakra-ui/react";

const Bio = () => {
  return (
    <HStack padding={5} bg="black" borderRadius="lg" spacing={5}>
      <Avatar size="xl" name="kavimaluskam" src="https://bit.ly/dan-abramov" />
      <Stack>
        <Heading fontSize="2xl">Hey, I'm kavimaluskam.eth 👋</Heading>
        <Heading fontSize="md">I'm a founder, designer, and filmmaker.</Heading>
      </Stack>
    </HStack>
  );
};

export default Bio;
