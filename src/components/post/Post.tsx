import { FC } from "react";
import { PostProps } from "./@types/post.type";
import { Comment, Share } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import { formatDate } from "../../utils/format-date.util";
import { detectDirection } from "../../utils/detect-direction.util";
import { useNavigate } from "react-router-dom";
import LikeAction from "./components/LikeAction";

const Post: FC<PostProps> = ({
  id,
  text_content,
  image_content,
  user,
  likeCount,
  hasLike,
  created_at,
}) => {
  const navigate = useNavigate();

  const handleClickOnUser = () => {
    navigate(`/profile?user=${user.id}`);
  };

  const handleNavigateComment = () => {
    navigate(`/post?postId=${id}`);
  };

  return (
    <Box className="p-2">
      <Box
        onClick={handleClickOnUser}
        className="flex gap-2 p-2 items-center cursor-pointer"
      >
        <Avatar
          src={user.avatar}
          className="size-10 !text-primary-600 !bg-secondary-600"
        />
        <Typography>{user.name}</Typography>
        <Typography className="!text-xs text-secondary-500">
          {formatDate(created_at)}
        </Typography>
      </Box>
      <Typography
        dir={detectDirection(text_content)}
        className="!font-light text-sm p-2"
        component={"p"}
      >
        {text_content}
      </Typography>
      <img className="max-w-full max-h-60 p-2" src={image_content} />

      <Box
        dir="ltr"
        className="flex gap-8 items-center justify-center p-2 text-secondary-500 "
      >
        {/* Like */}
        <LikeAction {...{ id, likeCount, hasLike }} />
        {/* Comment */}
        <Comment
          onClick={handleNavigateComment}
          className="cursor-pointer hover:text-primary-500"
        />
        {/* Share Post */}
        <Share className="cursor-pointer" />
      </Box>
      <Box
        component={"hr"}
        className="border-secondary-500/10 border-dashed border-spacing-5 mt-2"
      />
    </Box>
  );
};

export default Post;
