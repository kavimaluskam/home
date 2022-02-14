// index.tsx

import { Box } from "@chakra-ui/react";

import Masonry from "react-masonry-component";

import Layout from "../components/Layout";
import Bio from "../components/Bio";
import Job from "../components/Job";
import PreviewWidget from "../components/Blogs/PreviewWidget";
import LetterboxdRecentMovies from "../components/LetterboxdRecentMovies";
import SpotifyTopArtists from "../components/SpotifyTopArtists";
import OkuclubBooks from "../components/OkuclubBooks";

import { Blog } from "../types/mdx";
import { fetchBlogFilePaths, fetchBlogByPath } from "../lib/mdx";

const Index = ({ blogs }: { blogs: Array<Blog> }) => {
  return (
    <Layout>
      <>
        <Box w="100%" d="inline-block" p={3}>
          <Bio />
        </Box>

        <Masonry>
          <Box w={{ sm: "100%", md: "50%" }} d="inline-block" p={3}>
            <Job />
          </Box>

          <Box w={{ sm: "100%", md: "50%" }} d="inline-block" p={3}>
            <PreviewWidget blogs={blogs} />
          </Box>

          <Box w={{ sm: "100%", md: "50%" }} d="inline-block" p={3}>
            <LetterboxdRecentMovies />
          </Box>

          <Box w={{ sm: "100%", md: "50%" }} d="inline-block" p={3}>
            <SpotifyTopArtists />
          </Box>

          <Box w={{ sm: "100%", md: "50%" }} d="inline-block" p={3}>
            <OkuclubBooks />
          </Box>
        </Masonry>
      </>
    </Layout>
  );
};

export default Index;

export const getStaticProps = () => {
  const blogs = fetchBlogFilePaths().map(fetchBlogByPath);

  return { props: { blogs } };
};
