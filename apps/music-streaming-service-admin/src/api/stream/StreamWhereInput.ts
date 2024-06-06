import { StringFilter } from "../../util/StringFilter";
import { SongWhereUniqueInput } from "../song/SongWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StreamWhereInput = {
  id?: StringFilter;
  song?: SongWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
