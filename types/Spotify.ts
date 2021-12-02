/**
 * Interfaces for Spotify API Response
 */
export interface AccessTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}
export interface TopArtistsResponse {
  items: Artist[];
  total: number;
  limit: number;
  offset: number;
  previous?: string;
  href: string;
  next?: string;
}

/**
 * Interfaces for individual Spotify API Response items
 */
export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href?: string;
  total: number;
}

export interface Image {
  height?: number;
  url: string;
  width?: number;
}

export interface Artist {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

/**
 * Interfaces for internal Spotify items
 */
export interface TopArtist {
  name: string;
  avatar: string;
  href: string;
  popularity: number;
}
