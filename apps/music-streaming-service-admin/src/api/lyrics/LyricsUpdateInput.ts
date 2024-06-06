import { SongWhereUniqueInput } from "../song/SongWhereUniqueInput";

export type LyricsUpdateInput = {
  content?: string | null;
  song?: SongWhereUniqueInput | null;
};
