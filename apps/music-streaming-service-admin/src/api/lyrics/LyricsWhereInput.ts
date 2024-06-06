import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SongWhereUniqueInput } from "../song/SongWhereUniqueInput";

export type LyricsWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  song?: SongWhereUniqueInput;
};
