import { useMutation, useQuery } from "@tanstack/react-query";
import { PostKeys } from "./post.keys";
import usePostAction from "./post.actions";
import {
  CreatePostRequest,
  GetLikersParams,
  GetPostsParams,
  GetRandomPostsParams,
} from "./post.type";
import { useState } from "react";

export const useCreatePost = () => {
  const { createPostAction } = usePostAction();
  const [progress, setProgress] = useState<number>(0);

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [PostKeys.create],
    mutationFn: (data: CreatePostRequest) =>
      createPostAction(data, (progressLoaded) => {
        setProgress(progressLoaded);
      }),
  });

  return {
    createPostData: data,
    createPostMutate: mutate,
    createPostIsPending: isPending,
    createPostIsSuccess: isSuccess,
    createPostProgress: progress,
  };
};

export const useUserGetPosts = (params: GetPostsParams) => {
  const { getPostsUserAction } = usePostAction();

  const { data, isLoading } = useQuery({
    queryKey: [PostKeys.getPosts, params.page, params.userId, params.limit],
    queryFn: () => getPostsUserAction(params),
  });

  return {
    getPostsData: data,
    getPostsLoading: isLoading,
  };
};

export const useGetRandomPosts = (params: GetRandomPostsParams) => {
  const { getRandomPostsAction } = usePostAction();

  const { data, isLoading } = useQuery({
    queryKey: [PostKeys.getRandomPosts, params.page, params.limit],
    queryFn: () => getRandomPostsAction(params),
  });

  return {
    getRandomPostsData: data,
    getRandomPostsLoading: isLoading,
  };
};

export const useGetOnePosts = (postId: number) => {
  const { getOnePostsAction } = usePostAction();

  const { data, isLoading } = useQuery({
    queryKey: [PostKeys.getPost, postId],
    queryFn: () => getOnePostsAction(postId),
  });

  return {
    getOnePostsData: data,
    getOnePostsLoading: isLoading,
  };
};

export const useToggleLikePost = () => {
  const { toggleLikeAction } = usePostAction();

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [PostKeys.toggleLike],
    mutationFn: (postId: number) => toggleLikeAction(postId),
  });

  return {
    toggleLikePostData: data,
    toggleLikePostMutate: mutate,
    toggleLikePostIsPending: isPending,
    toggleLikePostIsSuccess: isSuccess,
  };
};

export const useGetPostLikers = (params: GetLikersParams) => {
  const { getPostLikersAction } = usePostAction();

  const { data, isLoading } = useQuery({
    queryKey: [PostKeys.likers, params.page, params.limit, params.postId],
    queryFn: () => getPostLikersAction(params),
  });

  return {
    getOnePostsData: data,
    getOnePostsLoading: isLoading,
  };
};

export const useDeletePost = () => {
  const { deletePostAction } = usePostAction();

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [PostKeys.deletePost],
    mutationFn: (postId: number) => deletePostAction(postId),
  });

  return {
    deletePostData: data,
    deletePostMutate: mutate,
    deletePostIsPending: isPending,
    deletePostIsSuccess: isSuccess,
  };
};
