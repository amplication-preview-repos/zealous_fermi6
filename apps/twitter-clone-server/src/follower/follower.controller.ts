import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FollowerService } from "./follower.service";
import { FollowerControllerBase } from "./base/follower.controller.base";

@swagger.ApiTags("followers")
@common.Controller("followers")
export class FollowerController extends FollowerControllerBase {
  constructor(
    protected readonly service: FollowerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
