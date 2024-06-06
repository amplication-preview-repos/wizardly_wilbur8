import * as graphql from "@nestjs/graphql";
import { LoginUserInput } from "../userAuth/LoginUserInput";
import { RegisterUserInput } from "../userAuth/RegisterUserInput";
import { UserAuthService } from "./userauth.service";

export class UserAuthResolver {
  constructor(protected readonly service: UserAuthService) {}

  @graphql.Mutation(() => LoginUserInput)
  async LoginUser(
    @graphql.Args()
    args: LoginUserInput
  ): Promise<LoginUserInput> {
    return this.service.LoginUser(args);
  }

  @graphql.Query(() => String)
  async LoginUser(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.LoginUser(args);
  }

  @graphql.Mutation(() => RegisterUserInput)
  async RegisterUser(
    @graphql.Args()
    args: RegisterUserInput
  ): Promise<RegisterUserInput> {
    return this.service.RegisterUser(args);
  }

  @graphql.Query(() => String)
  async RegisterUser(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RegisterUser(args);
  }
}
