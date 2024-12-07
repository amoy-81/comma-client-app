import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  TextField,
} from "@mui/material";
import { t } from "i18next";
import useAuth from "../../../../hooks/use-auth.hook";
import { useEffect, useState } from "react";
import {
  useCreateComment,
  useGetCommentList,
} from "../../../../api/comment/comment.querys";
import { useSearchParams } from "react-router-dom";
import Comment from "./components/comment/Comment";
import useInfiniteScroll from "../../../../hooks/use-infinite-scroll.hook";
import CommentSkeleton from "./components/comment/CommentSkeleton";

const CommentsSection = () => {
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("postId");

  const { user } = useAuth();
  const { avatar } = user || {};

  const [createCommentState, setCreateCommentState] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const skeletonArray = Array.from({ length: 4 });

  const { createCommentMutate, createCommentIsPending } = useCreateComment();

  const { getCommentListData, getCommentListLoading } = useGetCommentList({
    postId: parseInt(postId || "") || 0,
    page: pageNumber,
    pageSize: 5,
  });

  const { setLastItem, data, page, reset } =
    useInfiniteScroll(getCommentListData);

  useEffect(() => {
    setPageNumber(page);
  }, [page]);

  const handleCreateComment = () => {
    createCommentMutate(
      { post_id: parseInt(postId || ""), text: createCommentState },
      {
        onSuccess: () => {
          setCreateCommentState("");
          reset();
        },
      }
    );
  };

  return (
    <>
      <Box className="relative bg-secondary-900 p-2 rounded-lg grid grid-cols-12">
        <Box className="lg:col-span-10 col-span-12">
          <Box className="flex">
            <Box className="p-2">
              <Avatar
                className="!size-10 !text-primary-600 !bg-secondary-600"
                src={avatar}
              />
            </Box>
            <Box className="w-full">
              <TextField
                className="!w-full !border-0"
                placeholder={t("What is your feedback?")}
                value={createCommentState}
                onChange={(e) => setCreateCommentState(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    border: "none",
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box className="lg:col-span-2 col-span-12 p-2">
          <Button
            fullWidth
            variant="contained"
            className="!rounded-3xl min-w-28"
            onClick={handleCreateComment}
            disabled={!createCommentState.length || createCommentIsPending}
          >
            {createCommentIsPending ? t("send") : t("answer")}
          </Button>
        </Box>

        {createCommentIsPending && (
          <Box className="absolute top-0 left-0 w-full h-full backdrop-blur-sm flex justify-center items-center">
            <CircularProgress variant="indeterminate" />
          </Box>
        )}
      </Box>

      <Box className="flex flex-col gap-2 mt-4">
        {/* Comments */}
        {!!data.length &&
          data?.map((comment) => (
            <Box key={comment.id} ref={setLastItem}>
              <Comment {...comment} />
            </Box>
          ))}

        {/* Skeleton */}
        {getCommentListLoading &&
          skeletonArray.map((_, index) => <CommentSkeleton key={index} />)}
      </Box>
    </>
  );
};

export default CommentsSection;
