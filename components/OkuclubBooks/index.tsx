import { Text, Link, Box } from "@chakra-ui/react";
import Avatar from "./avatar";
import { Book } from "../../types/Okuclub";

const AVATAR_POSITION_ARRAY = [
  { left: "28%", top: "0%", width: "44%", zIndex: 2 },
  { left: "2%", bottom: "10%", width: "44%", transform: "rotate(-5deg)" },
  { right: "2%", bottom: "3%", width: "44%", transform: "rotate(4deg)" },
];

interface SpotifyTopArtistsProps {
  readingBooks: Book[];
  headline: string;
}

const SpotifyTopArtists = ({
  readingBooks,
  headline,
}: SpotifyTopArtistsProps) => {
  return (
    <Box padding={5} bg="black" borderRadius="lg" pos="relative">
      <Text fontSize="md" color="gray.100" pb="5" textAlign="center">
        Currently I'm Reading 📚
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

export default SpotifyTopArtists;
