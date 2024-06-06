import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserAuthService } from "./userauth.service";
import { LoginUserInput } from "../userAuth/LoginUserInput";
import { RegisterUserInput } from "../userAuth/RegisterUserInput";

@swagger.ApiTags("userAuths")
@common.Controller("userAuths")
export class UserAuthController {
  constructor(protected readonly service: UserAuthService) {}

  @common.Post("/loginUser")
  @swagger.ApiOkResponse({
    type: LoginUserInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LoginUser(
    @common.Body()
    body: string
  ): Promise<LoginUserInput> {
        return this.service.LoginUser(body);
      }

  @common.Get("/:id/login-user")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LoginUser(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.LoginUser(body);
      }

  @common.Post("/registerUser")
  @swagger.ApiOkResponse({
    type: RegisterUserInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RegisterUser(
    @common.Body()
    body: string
  ): Promise<RegisterUserInput> {
        return this.service.RegisterUser(body);
      }

  @common.Get("/:id/register-user")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RegisterUser(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RegisterUser(body);
      }
}
