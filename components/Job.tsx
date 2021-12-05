import { Image, Stack, Text } from "@chakra-ui/react";
import siteMetadata from "../configs/siteMetadata";

const Job = () => {
  return (
    <Stack padding={5} bg="orange.600" borderRadius="lg" spacing={5}>
      <Image
        boxSize="150px"
        ml="auto"
        mr="auto"
        alt={siteMetadata.job.company}
        src={siteMetadata.job.avatar}
      />
      {siteMetadata.job.descriptions.map((description) => (
        <Text>{description}</Text>
      ))}
    </Stack>
  );
};

export default Job;
