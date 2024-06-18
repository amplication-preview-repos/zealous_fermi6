import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";
import { Like } from "../like/Like";
import { User } from "../user/User";

export type Tweet = {
  comments?: Array<Comment>;
  commentsCount: number | null;
  content: string | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  likes?: Array<Like>;
  likesCount: number | null;
  updatedAt: Date;
  user?: User | null;
};
