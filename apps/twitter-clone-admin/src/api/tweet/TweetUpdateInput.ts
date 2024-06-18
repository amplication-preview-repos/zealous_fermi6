import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";
import { InputJsonValue } from "../../types";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetUpdateInput = {
  comments?: CommentUpdateManyWithoutTweetsInput;
  commentsCount?: number | null;
  content?: string | null;
  image?: InputJsonValue;
  likes?: LikeUpdateManyWithoutTweetsInput;
  likesCount?: number | null;
  user?: UserWhereUniqueInput | null;
};
