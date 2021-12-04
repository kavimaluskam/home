import { AspectRatio, Image, LinkOverlay, Tooltip } from "@chakra-ui/react";
import { Book } from "../../types/Okuclub";

interface AvatarProps {
  book: Book;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  width?: string;
  zIndex?: number;
  transform?: string;
}

const Avatar = ({
  book,
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
    key={`${book.name} by ${book.authors}`}
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
    <Tooltip
      label={`${book.name} by ${book.authors}`}
      bg="gray.900"
      color="gray.50"
    >
      <LinkOverlay href={book.href} isExternal={true}>
        <Image
          alt={`${book.name} by ${book.authors}`}
          src={book.avatar}
          borderRadius={2}
          boxSize="100%"
        />
      </LinkOverlay>
    </Tooltip>
  </AspectRatio>
);

export default Avatar;
