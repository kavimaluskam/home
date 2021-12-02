import { Avatar, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Bio = () => {
  const { t } = useTranslation();
  return (
    <HStack padding={5} bg="black" borderRadius="lg" spacing={5}>
      <Avatar size="xl" name="kavimaluskam" src="/avatar.jpeg" />
      <Stack>
        <Heading fontSize="2xl">{t("Bio.Headline")}</Heading>
        <Text fontSize="md">{t("Bio.Description")}</Text>
      </Stack>
    </HStack>
  );
};

export default Bio;
