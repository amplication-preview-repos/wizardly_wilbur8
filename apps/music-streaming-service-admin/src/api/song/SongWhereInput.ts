import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { LyricsListRelationFilter } from "../lyrics/LyricsListRelationFilter";
import { StreamListRelationFilter } from "../stream/StreamListRelationFilter";

export type SongWhereInput = {
  album?: AlbumWhereUniqueInput;
  artist?: StringNullableFilter;
  duration?: IntNullableFilter;
  file?: JsonFilter;
  genre?: StringNullableFilter;
  id?: StringFilter;
  lyricsItems?: LyricsListRelationFilter;
  streams?: StreamListRelationFilter;
  title?: StringNullableFilter;
};
