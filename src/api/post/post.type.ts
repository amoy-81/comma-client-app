import { Pagination } from "../@types/pagination.type";
import { User } from "../user/user.type";

export type Post = {
  id: number;
  text_content: string;
  image_content: string;
  created_at: string;
  updated_at: string;
  user: Pick<User, "id" | "name" | "email" | "avatar">;
  likeCount: number;
  hasLike: boolean;
};

export type CreatePostRequest = {
  text_content: string;
  image_content?: File | null;
};

export type CreatePostResponse = {
  success: boolean;
  id: number;
  user_id: number;
};

export type GetPostsParams = Pagination & {
  userId?: number;
};

export type GetPostsResponse = Post[];

export type GetRandomPostsParams = Pagination;

export type GetRandomPostsResponse = Post[];

export type GetOnePostResponse = Post;

export type ToggleLikeResponse = {
  message: string;
  op: "LIKE" | "DISLIKE";
};

export type GetLikersParams = Pagination & { postId: number };

export type GetPostLikersResponse = {
  post_id: string;
  total: number;
  page: string;
  pageSize: string;
  users: Pick<User, "id" | "name" | "email" | "avatar">[];
};

export type DeletePostResponse = {
  message: string;
  op: "DELETE";
};
