import { AxiosProgressEvent } from "axios";
import axiosInstance from "../../services/http.service";
import { generateQueryParams } from "../../utils/generate-query-params.util";
import {
  CreatePostRequest,
  CreatePostResponse,
  GetLikersParams,
  GetOnePostResponse,
  GetPostLikersResponse,
  GetPostsParams,
  GetPostsResponse,
  GetRandomPostsParams,
  GetRandomPostsResponse,
  SearchPostsParams,
  SearchPostsResponse,
  ToggleLikeResponse,
} from "./post.type";
import { PostUrls } from "./post.urls";

const usePostAction = () => {
  const createPostAction = async (
    data: CreatePostRequest,
    onProgress?: (progress: number) => void
  ): Promise<CreatePostResponse> => {
    const response = await axiosInstance
      .post(PostUrls.create, data, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          onProgress &&
            onProgress(
              Math.round(
                (progressEvent.loaded / (progressEvent.total || 1)) * 100
              )
            );
        },
      })
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const getPostsUserAction = async (
    params: GetPostsParams
  ): Promise<GetPostsResponse> => {
    const queryParams = generateQueryParams(params);

    const url = `${PostUrls.general}${queryParams ? `?${queryParams}` : ""}`;

    const response = await axiosInstance
      .get(url)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const getRandomPostsAction = async (
    params: GetRandomPostsParams
  ): Promise<GetRandomPostsResponse> => {
    const queryParams = generateQueryParams(params);

    const url = `${PostUrls.getRandomPosts}${
      queryParams ? `?${queryParams}` : ""
    }`;

    const response = await axiosInstance
      .get(url)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const getOnePostsAction = async (
    postId: number
  ): Promise<GetOnePostResponse> => {
    const response = await axiosInstance
      .get(`${PostUrls.general}/${postId}`)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const toggleLikeAction = async (
    postId: number
  ): Promise<ToggleLikeResponse> => {
    const response = await axiosInstance
      .put(`${PostUrls.toggleLike}/${postId}`)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const getPostLikersAction = async (
    params: GetLikersParams
  ): Promise<GetPostLikersResponse> => {
    const { postId, ...paginationParams } = params;

    const queryParams = generateQueryParams(paginationParams);

    const url = `${PostUrls.likers}/${postId}${
      queryParams ? `?${queryParams}` : ""
    }`;

    const response = await axiosInstance
      .get(url)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const deletePostAction = async (
    postId: number
  ): Promise<ToggleLikeResponse> => {
    const response = await axiosInstance
      .delete(`${PostUrls.general}/${postId}`)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const searchPostsAction = async (
    params: SearchPostsParams
  ): Promise<SearchPostsResponse> => {
    const queryParams = generateQueryParams(params);

    const url = `${PostUrls.search}${queryParams ? `?${queryParams}` : ""}`;

    const response = await axiosInstance
      .get(url)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  return {
    createPostAction,
    getPostsUserAction,
    getRandomPostsAction,
    getOnePostsAction,
    toggleLikeAction,
    getPostLikersAction,
    deletePostAction,
    searchPostsAction,
  };
};

export default usePostAction;
