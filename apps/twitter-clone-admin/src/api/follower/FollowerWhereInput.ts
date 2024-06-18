import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowerWhereInput = {
  followedUser?: StringNullableFilter;
  followingUser?: StringNullableFilter;
  id?: StringFilter;
};
