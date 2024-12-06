import { Post } from "../../../api/post/post.type";

export type PostProps = Post;

export type LikeActionProps = {
  id: number;
  likeCount: number;
  hasLike: boolean;
};
