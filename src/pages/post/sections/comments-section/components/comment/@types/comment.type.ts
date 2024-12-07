import { User } from "../../../../../../../api/user/user.type";

export type CommentProps = {
  text: string;
  user: Pick<User, "id" | "name" | "email" | "avatar">;
  voteCount: number;
  hasVoted: boolean;
  created_at: string;
};
