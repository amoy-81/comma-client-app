import { Avatar, Box, Typography } from "@mui/material";
import { formatDate } from "../../../../../../utils/format-date.util";
import { detectDirection } from "../../../../../../utils/detect-direction.util";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { CommentProps } from "./@types/comment.type";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Comment: FC<CommentProps> = ({ user, text, created_at }) => {
  const navigate = useNavigate();

  const handleClickOnUser = () => {
    navigate(`/profile?user=${user.id}`);
  };
  return (
    <Box className="p-2 bg-secondary-800 rounded-lg">
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
        dir={detectDirection(text)}
        className="!font-light text-sm p-2 px-4"
        component={"p"}
      >
        {text}
      </Typography>

      <Box
        dir="ltr"
        className="flex gap-8 items-center justify-center p-2 text-secondary-500 "
      >
        <ThumbUpIcon className="cursor-pointer hover:text-primary-500" />
      </Box>
    </Box>
  );
};

export default Comment;
