import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";
import { Like } from "../like/Like";
import { Tweet } from "../tweet/Tweet";

export type User = {
  bio: string | null;
  comments?: Array<Comment>;
  coverPhoto: JsonValue;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  profileImage: JsonValue;
  roles: JsonValue;
  tweets?: Array<Tweet>;
  updatedAt: Date;
  username: string;
};
