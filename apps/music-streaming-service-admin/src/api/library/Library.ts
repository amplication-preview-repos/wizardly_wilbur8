import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Library = {
  createdAt: Date;
  downloadedSongs: JsonValue;
  id: string;
  likedSongs: JsonValue;
  songs: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
