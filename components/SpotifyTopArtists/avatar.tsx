import {
  AspectRatio,
  Text,
  Image,
  Box,
  LinkOverlay,
  Tooltip,
} from "@chakra-ui/react";

import { TopArtist } from "../../types/Spotify";

interface AvatarProps {
  artist: TopArtist;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  width?: string;
}

const Avatar = ({ artist, left, right, top, bottom, width }: AvatarProps) => (
  <AspectRatio
    ratio={1}
    key={artist.name}
    display="inline-block"
    pos="absolute"
    left={left}
    right={right}
    top={top}
    bottom={bottom}
    width={width}
  >
    <Tooltip label={artist.name} bg="gray.900" color="gray.50">
      <LinkOverlay href={artist.href} isExternal={true}>
        <Image
          alt={artist.name}
          src={artist.avatar}
          borderRadius="full"
          boxSize="100%"
        />
      </LinkOverlay>
    </Tooltip>
  </AspectRatio>
);

export default Avatar;
