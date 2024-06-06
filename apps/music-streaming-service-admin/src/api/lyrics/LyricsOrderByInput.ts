import { SortOrder } from "../../util/SortOrder";

export type LyricsOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  songId?: SortOrder;
  updatedAt?: SortOrder;
};
