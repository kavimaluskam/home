import { Box, Link, Text } from "@chakra-ui/react";
import Avatar from "./avatar";
import siteMetadata from "../../configs/siteMetadata";
import { Book } from "../../types/Okuclub";

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

const OkuclubBooks = ({ readingBooks }: { readingBooks: Array<Book> }) => {
  return (
    <Box padding={5} bg="black" borderRadius="lg" pos="relative">
      <Link href={siteMetadata.okuclubBooks.profile} isExternal={true}>
        <Text fontSize="md" color="gray.100" pb="5" textAlign="center">
          {siteMetadata.okuclubBooks.headline}
        </Text>
      </Link>

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
