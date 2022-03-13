import { Box, Link, Text } from "@chakra-ui/react";
import Avatar from "./avatar";
import siteMetadata from "../../configs/siteMetadata";
import { RecentMovie } from "../../types/Letterboxd";

const AVATAR_POSITION_ARRAY = [
  { left: "33%", top: "30%", width: "33%", zIndex: 2 },
  {
    left: "9%",
    top: "34%",
    width: "33%",
    transform: "rotate(-5deg)",
    zIndex: 1,
  },
  {
    right: "9%",
    top: "37%",
    width: "33%",
    transform: "rotate(4deg)",
    zIndex: 1,
  },
  { left: "17%", top: "1%", width: "33%", transform: "rotate(-3deg)" },
  { right: "19%", top: "5%", width: "33%", transform: "rotate(2deg)" },
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
