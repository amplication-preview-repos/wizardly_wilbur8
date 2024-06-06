import { Lyrics as TLyrics } from "../api/lyrics/Lyrics";

export const LYRICS_TITLE_FIELD = "id";

export const LyricsTitle = (record: TLyrics): string => {
  return record.id?.toString() || String(record.id);
};
