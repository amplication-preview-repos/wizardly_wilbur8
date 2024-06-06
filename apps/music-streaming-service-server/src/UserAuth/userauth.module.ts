import { Module } from "@nestjs/common";
import { UserAuthService } from "./userauth.service";
import { UserAuthController } from "./userauth.controller";
import { UserAuthResolver } from "./userauth.resolver";

@Module({
  controllers: [UserAuthController],
  providers: [UserAuthService, UserAuthResolver],
  exports: [UserAuthService],
})
export class UserAuthModule {}
