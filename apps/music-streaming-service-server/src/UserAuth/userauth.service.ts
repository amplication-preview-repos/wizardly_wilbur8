import { Injectable } from "@nestjs/common";
import { LoginUserInput } from "../userAuth/LoginUserInput";
import { RegisterUserInput } from "../userAuth/RegisterUserInput";

@Injectable()
export class UserAuthService {
  constructor() {}
  async LoginUser(args: LoginUserInput): Promise<LoginUserInput> {
    throw new Error("Not implemented");
  }
  async LoginUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RegisterUser(args: RegisterUserInput): Promise<RegisterUserInput> {
    throw new Error("Not implemented");
  }
  async RegisterUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
