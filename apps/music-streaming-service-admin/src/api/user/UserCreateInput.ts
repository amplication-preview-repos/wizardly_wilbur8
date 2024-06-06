import { LibraryCreateNestedManyWithoutUsersInput } from "./LibraryCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StreamCreateNestedManyWithoutUsersInput } from "./StreamCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  libraries?: LibraryCreateNestedManyWithoutUsersInput;
  password: string;
  profilePicture?: InputJsonValue;
  roles: InputJsonValue;
  streams?: StreamCreateNestedManyWithoutUsersInput;
  username: string;
};
