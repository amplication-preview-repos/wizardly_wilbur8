import { LyricsWhereInput } from "./LyricsWhereInput";
import { LyricsOrderByInput } from "./LyricsOrderByInput";

export type LyricsFindManyArgs = {
  where?: LyricsWhereInput;
  orderBy?: Array<LyricsOrderByInput>;
  skip?: number;
  take?: number;
};
