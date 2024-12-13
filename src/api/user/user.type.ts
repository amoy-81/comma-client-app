type Pagination = {
  page?: number;
  limit?: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: UserRoles;
  bio: string;
  created_at: string;
  updated_at: string;
};

export type GetUserByIdResponse = {
  user: User;
  related: {
    following: User[];
    followers: User[];
  };
  status: {
    userId: number;
    postCount: number;
    followerCount: number;
    followingCount: number;
  };
};

export type FollowResponse = {
  success: boolean;
  messgae: string;
};

export type UnfollowResponse = FollowResponse;

export type SearchUserParams = Pagination & {
  name: string;
};

export type SearchUserResponse = User[];

export type UpdateProfileRequest = {
  userId: number;
  name?: string;
  bio?: string;
  avatar?: File;
};

export enum UserRoles {
  NORMAL_USER = "NORMAL_USER",
  GOLD_USER = "GOLD_USER",
  VERIFYED_USER = "VERIFYED_USER",
  SUPER_USER = "SUPER_USER",
}
