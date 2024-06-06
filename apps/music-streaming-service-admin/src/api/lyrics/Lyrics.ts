import { Song } from "../song/Song";

export type Lyrics = {
  content: string | null;
  createdAt: Date;
  id: string;
  song?: Song | null;
  updatedAt: Date;
};
