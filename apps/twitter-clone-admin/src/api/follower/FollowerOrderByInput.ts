import { SortOrder } from "../../util/SortOrder";

export type FollowerOrderByInput = {
  createdAt?: SortOrder;
  followedUser?: SortOrder;
  followingUser?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
