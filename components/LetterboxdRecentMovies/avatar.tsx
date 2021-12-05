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
    boxShadow="rgb(0 0 0 / 30%) 0px 1.1px 1.5px, rgb(0 0 0 / 20%) 0px 2.8px 3.9px, rgb(0 0 0 / 16%) 0px 5.8px 7.9px, rgb(0 0 0 / 12%) 0px 12.0455px 16.4px, rgb(0 0 0 / 8%) 0px 33px 45px;"
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
