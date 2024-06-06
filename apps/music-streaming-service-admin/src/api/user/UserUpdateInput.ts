import { LibraryUpdateManyWithoutUsersInput } from "./LibraryUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StreamUpdateManyWithoutUsersInput } from "./StreamUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  libraries?: LibraryUpdateManyWithoutUsersInput;
  password?: string;
  profilePicture?: InputJsonValue;
  roles?: InputJsonValue;
  streams?: StreamUpdateManyWithoutUsersInput;
  username?: string;
};
