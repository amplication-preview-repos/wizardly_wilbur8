import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SongListRelationFilter } from "../song/SongListRelationFilter";

export type AlbumWhereInput = {
  artist?: StringNullableFilter;
  coverImage?: JsonFilter;
  genre?: StringNullableFilter;
  id?: StringFilter;
  releaseDate?: DateTimeNullableFilter;
  songs?: SongListRelationFilter;
  title?: StringNullableFilter;
};
