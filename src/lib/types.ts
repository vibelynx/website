export type Track = {
  id: string;
  title: string;
  artists: { id: string; name: string }[];
  album: string;
  platforms: { key: string; name: string; url: string }[];
  artwork: string;
};
