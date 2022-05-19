import { Box, Flex, Image, Link } from "@chakra-ui/react";

import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

export const h2 = (props: any) => (
  <Box mt="4" mb="4" fontSize="2xl" fontWeight="semibold" as="h2" {...props} />
);
export const h3 = (props: any) => (
  <Box mt="4" mb="4" fontSize="xl" fontWeight="semibold" as="h2" {...props} />
);
export const p = (props: any) => <Box m="4px 0 16px 0" as="p" {...props} />;

export const a = (props: any) => <Link {...props} color="orange" />;
export const ol = (props: any) => <Box pl="4" as="ol" {...props} />;
export const ul = (props: any) => <Box mb="4" pl="4" as="ul" {...props} />;
export const li = (props: any) => <Box mb="4" as="li" {...props} />;
export const blockquote = (props: any) => (
  <Box
    mb="4"
    pl="4"
    borderLeft="4px solid orange"
    as="blockquote"
    fontSize="xl"
    letterSpacing="0.03em"
    lineHeight="1.7rem"
    fontStyle={["italic"]}
    {...props}
  />
);

export const pre = (props: any) => {
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children}
      language={props.children.props.className.replace("language-", "")}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <Box
            as="pre"
            fontSize="0.7rem"
            p="4"
            overflow="auto"
            className={className}
            style={style}
          >
            {tokens.slice(0, -1).map((line, i) => (
              <Flex {...getLineProps({ line, key: i })}>
                <Box as="span" opacity="0.5" pr="1rem">
                  {i + 1}
                </Box>
                {line.map((token, key) => (
                  <Box as="span" {...getTokenProps({ token, key })} />
                ))}
              </Flex>
            ))}
          </Box>
        );
      }}
    </Highlight>
  );
};

export const img = (props: any) => (
  <Image
    mb="4"
    ml="auto"
    mr="auto"
    {...props}
    maxW="100%"
    objectFit="contain"
  />
);

export const figcaption = (props: any) => (
  <Box
    as="figcaption"
    mb="4"
    opacity="0.75"
    textAlign="center"
    fontSize="0.9rem"
    {...props}
  />
);
