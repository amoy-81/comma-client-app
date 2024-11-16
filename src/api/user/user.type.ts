import { Pagination } from "../../@types/pagination.type";

export type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string; // TODO: Change to enum
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
