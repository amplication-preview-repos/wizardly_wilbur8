import { InputJsonValue } from "../../types";
import { SongCreateNestedManyWithoutAlbumsInput } from "./SongCreateNestedManyWithoutAlbumsInput";

export type AlbumCreateInput = {
  artist?: string | null;
  coverImage?: InputJsonValue;
  genre?: string | null;
  releaseDate?: Date | null;
  songs?: SongCreateNestedManyWithoutAlbumsInput;
  title?: string | null;
};
