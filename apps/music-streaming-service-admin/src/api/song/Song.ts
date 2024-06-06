import { Album } from "../album/Album";
import { JsonValue } from "type-fest";
import { Lyrics } from "../lyrics/Lyrics";
import { Stream } from "../stream/Stream";

export type Song = {
  album?: Album | null;
  artist: string | null;
  createdAt: Date;
  duration: number | null;
  file: JsonValue;
  genre: string | null;
  id: string;
  lyricsItems?: Array<Lyrics>;
  streams?: Array<Stream>;
  title: string | null;
  updatedAt: Date;
};
