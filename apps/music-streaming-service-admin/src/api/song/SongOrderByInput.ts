import { SortOrder } from "../../util/SortOrder";

export type SongOrderByInput = {
  albumId?: SortOrder;
  artist?: SortOrder;
  createdAt?: SortOrder;
  duration?: SortOrder;
  file?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
