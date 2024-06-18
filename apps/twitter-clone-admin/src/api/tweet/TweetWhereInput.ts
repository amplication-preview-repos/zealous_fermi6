import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetWhereInput = {
  comments?: CommentListRelationFilter;
  commentsCount?: IntNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  likes?: LikeListRelationFilter;
  likesCount?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
