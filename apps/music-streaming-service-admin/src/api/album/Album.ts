import { JsonValue } from "type-fest";
import { Song } from "../song/Song";

export type Album = {
  artist: string | null;
  coverImage: JsonValue;
  createdAt: Date;
  genre: string | null;
  id: string;
  releaseDate: Date | null;
  songs?: Array<Song>;
  title: string | null;
  updatedAt: Date;
};
