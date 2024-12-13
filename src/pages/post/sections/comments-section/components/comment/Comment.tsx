import { Avatar, Box, Typography } from "@mui/material";
import { formatDate } from "../../../../../../utils/format-date.util";
import { detectDirection } from "../../../../../../utils/detect-direction.util";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { CommentProps } from "./@types/comment.type";
import VotingAction from "./components/VotingAction";
import { mergeClasses } from "../../../../../../utils/merge-classess.util";

const Comment: FC<CommentProps> = ({
  id,
  user,
  text,
  created_at,
  voteCount,
  hasVoted,
  variant = "normal",
}) => {
  const navigate = useNavigate();

  const handleClickOnUser = () => {
    navigate(`/profile?user=${user.id}`);
  };
  return (
    <Box
      className={mergeClasses(
        "p-2 bg-secondary-800 rounded-lg",
        variant === "gold" &&
          "bg-gradient-to-br from-amber-400 to-yellow-600 flash-effect"
      )}
    >
      <Box
        onClick={handleClickOnUser}
        className="flex gap-2 p-2 items-center cursor-pointer"
      >
        <Avatar
          src={user.avatar}
          className="size-10 !text-primary-600 !bg-secondary-600"
        />
        <Typography
          className={mergeClasses(variant === "gold" && "!text-secondary-900")}
        >
          {user.name}
        </Typography>
        <Typography
          className={mergeClasses(
            "!text-xs text-secondary-500",
            variant === "gold" && "!text-secondary-900"
          )}
        >
          {formatDate(created_at)}
        </Typography>
      </Box>
      <Typography
        dir={detectDirection(text)}
        className={mergeClasses(
          "!font-light text-sm p-2 px-4",
          variant === "gold" && "!text-secondary-900"
        )}
        component={"p"}
      >
        {text}
      </Typography>

      <Box
        dir="ltr"
        className="flex gap-8 items-center justify-center p-2 text-secondary-500"
      >
        <VotingAction {...{ id, hasVoted, voteCount }} />
      </Box>
    </Box>
  );
};

export default Comment;
