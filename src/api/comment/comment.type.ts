import { Pagination } from "../@types/pagination.type";
import { User } from "../user/user.type";

export type Comment = {
  id: number;
  text: string;
  postId: number;
  created_at: string;
  updated_at: string;
  user: Pick<User, "id" | "name" | "email" | "avatar">;
  voteCount: number;
  hasVoted: boolean;
};

export type VoteOperation = "VOTE_UP" | "VOTE_DOWN";

export type CreateCommentsRequest = {
  post_id: number;
  text: string;
};

export type CreateCommentResponse = {
  text: string;
  userId: number;
  postId: number;
  id: number;
  created_at: string;
  updated_at: string;
};

export type GetCommentListParams = Pagination & { postId: number };

export type GetCommentListResponse = Comment[];

export type VoteCommentResponse = {
  message: string;
  op: VoteOperation;
};
