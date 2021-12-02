import { Text, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Avatar from "./avatar";
import { TopArtist } from "../../types/Spotify";

const AVATAR_POSITION_ARRAY = [
  { left: "33%", top: "26%", width: "35%" },
  { left: "0%", top: "0%", width: "28%" },
  { left: "71%", top: "12%", width: "26%" },
  { right: "2%", top: "60%", width: "24%" },
  { left: "3%", top: "55%", width: "20%" },
  { left: "40%", bottom: "0%", width: "18%" },
  { left: "40%", top: "0%", width: "16%" },
];

interface SpotifyTopArtistsProps {
  topArtists: TopArtist[];
}

const SpotifyTopArtists = ({ topArtists }: SpotifyTopArtistsProps) => {
  const { t } = useTranslation();

  return (
    <Box padding={5} bg="gray.200" borderRadius="lg" pos="relative">
      <Text fontSize="md" color="gray.900" pb="5" textAlign="center">
        {t("SpotifyTopArtists.Headline")}
      </Text>

      <Box padding={5} pos="relative" height="0" pb="80%">
        {topArtists &&
          topArtists.length > 0 &&
          topArtists.map((artist, index) => {
            const { left, right, top, bottom, width } =
              AVATAR_POSITION_ARRAY[index];

            return (
              <Avatar
                key={artist.name}
                artist={artist}
                left={left}
                right={right}
                top={top}
                bottom={bottom}
                width={width}
              />
            );
          })}
      </Box>
    </Box>
  );
};

export default SpotifyTopArtists;
