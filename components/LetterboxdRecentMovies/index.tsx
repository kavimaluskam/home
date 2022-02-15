import { Box, Link, Text } from "@chakra-ui/react";
import Avatar from "./avatar";
import siteMetadata from "../../configs/siteMetadata";
import { RecentMovie } from "../../types/Letterboxd";

const AVATAR_POSITION_ARRAY = [
  { left: "28%", top: "0%", width: "44%", zIndex: 2 },
  { left: "2%", bottom: "10%", width: "44%", transform: "rotate(-5deg)" },
  { right: "2%", bottom: "3%", width: "44%", transform: "rotate(4deg)" },
];

const LetterboxdRecentMovies = ({
  recentMovies,
}: {
  recentMovies: Array<RecentMovie>;
}) => {
  return (
    <Box padding={5} bg="black" borderRadius="lg" pos="relative">
      <Link
        href={siteMetadata.letterboxdRecentMovies.profile}
        isExternal={true}
      >
        <Text fontSize="md" color="gray.100" pb="5" textAlign="center">
          {siteMetadata.letterboxdRecentMovies.headline}
        </Text>
      </Link>

      <Box padding={5} pos="relative" height="0" pb="75%">
        {recentMovies.map((movie, index) => {
          const { left, right, top, bottom, width, zIndex, transform } =
            AVATAR_POSITION_ARRAY[index];

          return (
            <Avatar
              key={movie.name}
              movie={movie}
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

export default LetterboxdRecentMovies;
