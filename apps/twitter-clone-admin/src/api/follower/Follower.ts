export type Follower = {
  createdAt: Date;
  followedUser: string | null;
  followingUser: string | null;
  id: string;
  updatedAt: Date;
};
