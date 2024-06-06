import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { LyricsUpdateManyWithoutSongsInput } from "./LyricsUpdateManyWithoutSongsInput";
import { StreamUpdateManyWithoutSongsInput } from "./StreamUpdateManyWithoutSongsInput";

export type SongUpdateInput = {
  album?: AlbumWhereUniqueInput | null;
  artist?: string | null;
  duration?: number | null;
  file?: InputJsonValue;
  genre?: string | null;
  lyricsItems?: LyricsUpdateManyWithoutSongsInput;
  streams?: StreamUpdateManyWithoutSongsInput;
  title?: string | null;
};
