import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FollowerModuleBase } from "./base/follower.module.base";
import { FollowerService } from "./follower.service";
import { FollowerController } from "./follower.controller";
import { FollowerResolver } from "./follower.resolver";

@Module({
  imports: [FollowerModuleBase, forwardRef(() => AuthModule)],
  controllers: [FollowerController],
  providers: [FollowerService, FollowerResolver],
  exports: [FollowerService],
})
export class FollowerModule {}
