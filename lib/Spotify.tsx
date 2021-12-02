import { AccessTokenResponse, TopArtistsResponse } from "../types/Spotify";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN as string;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists`;

export const getAccessToken = async (): Promise<AccessTokenResponse> => {
  const searchParams = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token,
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: searchParams.toString(),
  });

  if (response.status !== 200) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response.json();
};

export const getTopArtists = async (): Promise<TopArtistsResponse> => {
  const { access_token } = await getAccessToken();

  const response = await fetch(TOP_ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status !== 200) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response.json();
};
