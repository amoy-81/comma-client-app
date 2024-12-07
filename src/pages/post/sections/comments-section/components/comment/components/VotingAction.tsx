import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { VotingActionProps } from "../@types/comment.type";
import { useVotingComment } from "../../../../../../../api/comment/comment.querys";
import MotionNumber from "motion-number";
import { mergeClasses } from "../../../../../../../utils/merge-classess.util";

const VotingAction: FC<VotingActionProps> = ({ id, hasVoted, voteCount }) => {
  const [isVoted, setIsVoted] = useState(hasVoted);
  const [numberOfVote, setNumberOfVote] = useState(voteCount);

  const { votingCommentMutate, votingCommentIsPending } = useVotingComment();

  const handleChangeVoteStatus = () => {
    isVoted
      ? setNumberOfVote((prev) => prev - 1)
      : setNumberOfVote((prev) => prev + 1);

    setIsVoted((prev) => !prev);
  };

  const handleToggleLike = () => {
    if (votingCommentIsPending) return;

    handleChangeVoteStatus();

    votingCommentMutate(id, {
      onError: () => {
        handleChangeVoteStatus();
      },
    });
  };

  return (
    <Box
      className="flex items-center gap-1 active:scale-110 duration-300 cursor-pointer"
      onClick={handleToggleLike}
    >
      <ThumbUpIcon
        className={mergeClasses(
          "cursor-pointer hover:text-primary-500",
          isVoted && "text-primary-600"
        )}
      />
      <Typography className="!text-xs">
        <MotionNumber
          value={numberOfVote}
          format={{ notation: "compact" }}
          locales="en-US"
        />
      </Typography>
    </Box>
  );
};

export default VotingAction;
