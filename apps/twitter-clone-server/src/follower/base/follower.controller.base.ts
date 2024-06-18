/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FollowerService } from "../follower.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FollowerCreateInput } from "./FollowerCreateInput";
import { Follower } from "./Follower";
import { FollowerFindManyArgs } from "./FollowerFindManyArgs";
import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";
import { FollowerUpdateInput } from "./FollowerUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FollowerControllerBase {
  constructor(
    protected readonly service: FollowerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Follower })
  @nestAccessControl.UseRoles({
    resource: "Follower",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFollower(
    @common.Body() data: FollowerCreateInput
  ): Promise<Follower> {
    return await this.service.createFollower({
      data: data,
      select: {
        createdAt: true,
        followedUser: true,
        followingUser: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Follower] })
  @ApiNestedQuery(FollowerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Follower",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async followers(@common.Req() request: Request): Promise<Follower[]> {
    const args = plainToClass(FollowerFindManyArgs, request.query);
    return this.service.followers({
      ...args,
      select: {
        createdAt: true,
        followedUser: true,
        followingUser: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Follower })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Follower",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async follower(
    @common.Param() params: FollowerWhereUniqueInput
  ): Promise<Follower | null> {
    const result = await this.service.follower({
      where: params,
      select: {
        createdAt: true,
        followedUser: true,
        followingUser: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Follower })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Follower",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFollower(
    @common.Param() params: FollowerWhereUniqueInput,
    @common.Body() data: FollowerUpdateInput
  ): Promise<Follower | null> {
    try {
      return await this.service.updateFollower({
        where: params,
        data: data,
        select: {
          createdAt: true,
          followedUser: true,
          followingUser: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Follower })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Follower",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFollower(
    @common.Param() params: FollowerWhereUniqueInput
  ): Promise<Follower | null> {
    try {
      return await this.service.deleteFollower({
        where: params,
        select: {
          createdAt: true,
          followedUser: true,
          followingUser: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
