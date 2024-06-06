import { SongWhereUniqueInput } from "../song/SongWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StreamCreateInput = {
  song?: SongWhereUniqueInput | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
