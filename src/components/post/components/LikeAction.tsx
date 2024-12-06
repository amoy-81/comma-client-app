import { FC, useState } from "react";
import { LikeActionProps } from "../@types/post.type";
import { Box, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useToggleLikePost } from "../../../api/post/post.querys";
import MotionNumber from "motion-number";

const LikeAction: FC<LikeActionProps> = ({ id, likeCount, hasLike }) => {
  const [isLike, setIsLike] = useState(hasLike);
  const [numberOfLike, setNumberOfLike] = useState(likeCount);

  const { toggleLikePostMutate, toggleLikePostIsPending } = useToggleLikePost();

  const handleChangeLikeStatus = () => {
    isLike
      ? setNumberOfLike((prev) => prev - 1)
      : setNumberOfLike((prev) => prev + 1);

    setIsLike((prev) => !prev);
  };

  const handleToggleLike = () => {
    if (toggleLikePostIsPending) return;

    handleChangeLikeStatus();

    toggleLikePostMutate(id, {
      onError: () => {
        handleChangeLikeStatus();
      },
    });
  };

  return (
    <Box
      className="flex items-center gap-1 active:scale-110 duration-300 cursor-pointer"
      onClick={handleToggleLike}
    >
      {isLike ? (
        <Favorite className="text-red-600" />
      ) : (
        <FavoriteBorder className="hover:text-red-600" />
      )}
      <Typography className="!text-xs">
        <MotionNumber
          value={numberOfLike}
          format={{ notation: "compact" }}
          locales="en-US"
        />
      </Typography>
    </Box>
  );
};

export default LikeAction;
