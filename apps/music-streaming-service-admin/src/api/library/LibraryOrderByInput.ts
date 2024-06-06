import { SortOrder } from "../../util/SortOrder";

export type LibraryOrderByInput = {
  createdAt?: SortOrder;
  downloadedSongs?: SortOrder;
  id?: SortOrder;
  likedSongs?: SortOrder;
  songs?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
