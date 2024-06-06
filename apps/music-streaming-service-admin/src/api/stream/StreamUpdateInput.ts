import { SongWhereUniqueInput } from "../song/SongWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StreamUpdateInput = {
  song?: SongWhereUniqueInput | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
