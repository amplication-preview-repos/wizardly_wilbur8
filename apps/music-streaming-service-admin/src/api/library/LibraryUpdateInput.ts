import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LibraryUpdateInput = {
  downloadedSongs?: InputJsonValue;
  likedSongs?: InputJsonValue;
  songs?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
