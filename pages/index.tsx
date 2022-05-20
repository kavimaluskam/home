// index.tsx

import { Box } from "@chakra-ui/react";

import Masonry from "react-masonry-component";

import Bio from "../components/Bio";
import Job from "../components/Job";
import PreviewWidget from "../components/Blogs/PreviewWidget";
import TilPreviewWidget from "../components/Til/PreviewWidget";
import LetterboxdRecentMovies from "../components/LetterboxdRecentMovies";
import SpotifyTopArtists from "../components/SpotifyTopArtists";
import OkuclubBooks from "../components/OkuclubBooks";

import {
  fetchBlogSlugs,
  fetchBlogBySlug,
  fetchTilSlugs,
  fetchTilBySlug,
} from "../lib/mdx";
import { getReadingBooks } from "../lib/Okuclub";
import { getRecentMovies } from "../lib/Letterboxd";
import { getTopArtists } from "../lib/Spotify";

import { Blog, Til } from "../types/mdx";
import { Book } from "../types/Okuclub";
import { RecentMovie } from "../types/Letterboxd";
import { TopArtist } from "../types/Spotify";

const Index = ({
  blogs,
  til,
  readingBooks,
  recentMovies,
  topArtists,
}: {
  blogs: Array<Blog>;
  til: Array<Til>;
  readingBooks: Array<Book>;
  recentMovies: Array<RecentMovie>;
  topArtists: Array<TopArtist>;
}) => {
  return (
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
          <TilPreviewWidget til={til} />
        </Box>

        <Box w={{ sm: "100%", md: "50%" }} d="inline-block" p={3}>
          <LetterboxdRecentMovies recentMovies={recentMovies} />
        </Box>

        <Box w={{ sm: "100%", md: "50%" }} d="inline-block" p={3}>
          <SpotifyTopArtists topArtists={topArtists} />
        </Box>

        <Box w={{ sm: "100%", md: "50%" }} d="inline-block" p={3}>
          <OkuclubBooks readingBooks={readingBooks} />
        </Box>
      </Masonry>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const blogs = fetchBlogSlugs().slice(0, 1).map(fetchBlogBySlug);
  const til = fetchTilSlugs().slice(0, 3).map(fetchTilBySlug);

  const [readingBooks, recentMovies, topArtists] = await Promise.all([
    getReadingBooks(),
    getRecentMovies(),
    getTopArtists(),
  ]);

  return {
    props: { blogs, til, readingBooks, recentMovies, topArtists },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every day
    // Ref:
    // https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    revalidate: 60 * 60 * 24, // 1 day
  };
};
