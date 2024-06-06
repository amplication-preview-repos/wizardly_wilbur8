import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LibraryCreateInput = {
  downloadedSongs?: InputJsonValue;
  likedSongs?: InputJsonValue;
  songs?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
