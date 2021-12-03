import { AspectRatio, Image, LinkOverlay, Tooltip } from "@chakra-ui/react";
import { RecentMovie } from "../../types/Letterboxd";

interface AvatarProps {
  movie: RecentMovie;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  width?: string;
  zIndex?: number;
  transform?: string;
}

const Avatar = ({
  movie,
  left,
  right,
  top,
  bottom,
  width,
  zIndex,
  transform,
}: AvatarProps) => (
  <AspectRatio
    ratio={2 / 3}
    key={movie.name}
    display="inline-block"
    pos="absolute"
    left={left}
    right={right}
    top={top}
    bottom={bottom}
    width={width}
    zIndex={zIndex}
    transform={transform}
  >
    <Tooltip label={movie.name} bg="gray.900" color="gray.50">
      <LinkOverlay href={movie.href} isExternal={true}>
        <Image
          alt={movie.name}
          src={movie.avatar}
          borderRadius={2}
          boxSize="100%"
        />
      </LinkOverlay>
    </Tooltip>
  </AspectRatio>
);

export default Avatar;
