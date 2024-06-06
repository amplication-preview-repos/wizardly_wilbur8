import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LibraryWhereInput = {
  downloadedSongs?: JsonFilter;
  id?: StringFilter;
  likedSongs?: JsonFilter;
  songs?: JsonFilter;
  user?: UserWhereUniqueInput;
};
