import { Text, Box } from "@chakra-ui/react";
import Avatar from "./avatar";
import { useOkuclubBooks } from "../../hooks/useOkuclubBooks";
import siteMetadata from "../../configs/siteMetadata";

const AVATAR_POSITION_ARRAY = [
  {
    right: "2%",
    bottom: "5%",
    width: "44%",
    transform: "rotate(5deg)",
    zIndex: 2,
  },
  {
    left: "28%",
    bottom: "15%",
    width: "44%",
    zIndex: 1,
  },
  { left: "2%", top: "5%", width: "44%", transform: "rotate(-5deg)" },
];

const OkuclubBooks = () => {
  const readingBooks = useOkuclubBooks();

  return (
    <Box padding={5} bg="black" borderRadius="lg" pos="relative">
      <Text fontSize="md" color="gray.100" pb="5" textAlign="center">
        {siteMetadata.okuclubBooks.headline}
      </Text>

      <Box padding={5} pos="relative" height="0" pb="80%">
        {readingBooks &&
          readingBooks.length > 0 &&
          readingBooks.map((book, index) => {
            const { left, right, top, bottom, width, zIndex, transform } =
              AVATAR_POSITION_ARRAY[index];

            return (
              <Avatar
                key={book.name}
                book={book}
                left={left}
                right={right}
                top={top}
                bottom={bottom}
                width={width}
                zIndex={zIndex}
                transform={transform}
              />
            );
          })}
      </Box>
    </Box>
  );
};

export default OkuclubBooks;
