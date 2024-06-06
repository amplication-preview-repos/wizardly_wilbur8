import { SongWhereUniqueInput } from "../song/SongWhereUniqueInput";

export type LyricsCreateInput = {
  content?: string | null;
  song?: SongWhereUniqueInput | null;
};
