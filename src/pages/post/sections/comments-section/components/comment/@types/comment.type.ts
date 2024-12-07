import { User } from "../../../../../../../api/user/user.type";

export type CommentProps = {
  id: number;
  text: string;
  user: Pick<User, "id" | "name" | "email" | "avatar">;
  voteCount: number;
  hasVoted: boolean;
  created_at: string;
  variant?: "gold" | "normal";
};

export type VotingActionProps = {
  id: number;
  voteCount: number;
  hasVoted: boolean;
};
