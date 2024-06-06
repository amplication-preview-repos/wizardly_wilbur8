import { SortOrder } from "../../util/SortOrder";

export type AlbumOrderByInput = {
  artist?: SortOrder;
  coverImage?: SortOrder;
  createdAt?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  releaseDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
