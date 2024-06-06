import { Song } from "../song/Song";
import { User } from "../user/User";

export type Stream = {
  createdAt: Date;
  id: string;
  song?: Song | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
