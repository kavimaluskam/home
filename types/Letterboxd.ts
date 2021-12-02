export interface Movie {
  title: string[];
  link: string[];
  pubDate: string[];
  "letterboxd:watchedDate": string[];
  "letterboxd:rewatch": string[];
  "letterboxd:filmTitle": string[];
  "letterboxd:filmYear": string[];
  "letterboxd:memberRating": string[];
  description: string[];
  "dc:creator": string[];
}

export interface RecentMovie {
  name: string;
  href: string;
  avatar: string;
}
