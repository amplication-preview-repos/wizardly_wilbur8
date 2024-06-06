import { InputJsonValue } from "../../types";
import { SongUpdateManyWithoutAlbumsInput } from "./SongUpdateManyWithoutAlbumsInput";

export type AlbumUpdateInput = {
  artist?: string | null;
  coverImage?: InputJsonValue;
  genre?: string | null;
  releaseDate?: Date | null;
  songs?: SongUpdateManyWithoutAlbumsInput;
  title?: string | null;
};
