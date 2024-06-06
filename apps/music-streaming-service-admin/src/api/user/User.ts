import { Library } from "../library/Library";
import { JsonValue } from "type-fest";
import { Stream } from "../stream/Stream";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  libraries?: Array<Library>;
  profilePicture: JsonValue;
  roles: JsonValue;
  streams?: Array<Stream>;
  updatedAt: Date;
  username: string;
};
