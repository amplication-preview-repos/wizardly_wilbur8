import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { LyricsCreateNestedManyWithoutSongsInput } from "./LyricsCreateNestedManyWithoutSongsInput";
import { StreamCreateNestedManyWithoutSongsInput } from "./StreamCreateNestedManyWithoutSongsInput";

export type SongCreateInput = {
  album?: AlbumWhereUniqueInput | null;
  artist?: string | null;
  duration?: number | null;
  file?: InputJsonValue;
  genre?: string | null;
  lyricsItems?: LyricsCreateNestedManyWithoutSongsInput;
  streams?: StreamCreateNestedManyWithoutSongsInput;
  title?: string | null;
};
