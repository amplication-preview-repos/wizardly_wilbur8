import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LibraryListRelationFilter } from "../library/LibraryListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StreamListRelationFilter } from "../stream/StreamListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  libraries?: LibraryListRelationFilter;
  profilePicture?: JsonFilter;
  streams?: StreamListRelationFilter;
  username?: StringFilter;
};
