import { Library as TLibrary } from "../api/library/Library";

export const LIBRARY_TITLE_FIELD = "id";

export const LibraryTitle = (record: TLibrary): string => {
  return record.id?.toString() || String(record.id);
};
