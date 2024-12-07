import { useMutation, useQuery } from "@tanstack/react-query";
import useCommentAction from "./comment.actions";
import { CommentKeys } from "./comment.keys";
import { CreateCommentsRequest, GetCommentListParams } from "./comment.type";

export const useCreateComment = () => {
  const { createCommentAction } = useCommentAction();

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [CommentKeys.create],
    mutationFn: (data: CreateCommentsRequest) => createCommentAction(data),
  });

  return {
    createCommentData: data,
    createCommentMutate: mutate,
    createCommentIsPending: isPending,
    createCommentIsSuccess: isSuccess,
  };
};

export const useGetCommentList = (params: GetCommentListParams) => {
  const { getCommentListAction } = useCommentAction();

  const { data, isLoading } = useQuery({
    queryKey: [
      CommentKeys.getList,
      params.page,
      params.postId,
      params.pageSize,
    ],
    queryFn: () => getCommentListAction(params),
    staleTime: 0,
    gcTime: 0,
  });

  return {
    getCommentListData: data,
    getCommentListLoading: isLoading,
  };
};

export const useVotingComment = () => {
  const { voteCommentAction } = useCommentAction();

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [CommentKeys.vote],
    mutationFn: (commentId: number) => voteCommentAction(commentId),
  });

  return {
    votingCommentData: data,
    votingCommentMutate: mutate,
    votingCommentIsPending: isPending,
    votingCommentIsSuccess: isSuccess,
  };
};
