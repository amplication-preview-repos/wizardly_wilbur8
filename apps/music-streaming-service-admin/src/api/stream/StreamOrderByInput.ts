import { SortOrder } from "../../util/SortOrder";

export type StreamOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  songId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
