import axiosInstance from "../../services/http.service";
import { generateQueryParams } from "../../utils/generate-query-params.util";
import {
  CreatePostRequest,
  CreatePostResponse,
  GetOnePostResponse,
  GetPostsParams,
  GetPostsResponse,
  GetRandomPostsParams,
  GetRandomPostsResponse,
} from "./post.type";
import { PostUrls } from "./post.urls";
// import {
//   FollowResponse,
//   GetUserByIdResponse,
//   SearchUserParams,
//   SearchUserResponse,
//   UnfollowResponse,
//   UpdateProfileRequest,
// } from "./post.type";
// import { UserUrls } from "./post.urls";

const useUserAction = () => {
  const createPost = async (
    data: CreatePostRequest
  ): Promise<CreatePostResponse> => {
    const response = await axiosInstance
      .post(PostUrls.create, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const getPosts = async (
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

  const getRandomPosts = async (
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

  // const getOnePosts = async (id: number): Promise<GetOnePostResponse> => {
  //   const response = await axiosInstance
  //     .get(PostUrls.)
  //     .then((res) => res.data)
  //     .catch((err) => err);

  //   return response;
  // };

  // const followUser = async (userId: number): Promise<FollowResponse> => {
  //   const response = await axiosInstance
  //     .put(`${UserUrls.follow}/${userId}`)
  //     .then((res) => res.data)
  //     .catch((err) => err);

  //   return response;
  // };

  // const unfollowUser = async (userId: number): Promise<UnfollowResponse> => {
  //   const response = await axiosInstance
  //     .put(`${UserUrls.unfollow}/${userId}`)
  //     .then((res) => res.data)
  //     .catch((err) => err);

  //   return response;
  // };

  // const searchInUsers = async (
  //   params: SearchUserParams
  // ): Promise<SearchUserResponse> => {
  //   const { name, page, limit } = params;

  //   const response = await axiosInstance
  //     .get(`${UserUrls.search}?name=${name}&page=${page}&limit=${limit}`)
  //     .then((res) => res.data)
  //     .catch((err) => err);

  //   return response;
  // };

  // const updateUserInfo = async (
  //   body: UpdateProfileRequest
  // ): Promise<SearchUserResponse> => {
  //   const { userId, ...data } = body;

  //   const response = await axiosInstance
  //     .put(`${UserUrls.updateProfile}/${userId}`, data, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     })
  //     .then((res) => res.data)
  //     .catch((err) => err);

  //   return response;
  // };

  return {
    // getUserById,
    // followUser,
    // unfollowUser,
    // searchInUsers,
    getRandomPosts,
    getPosts,
    createPost,
  };
};

export default useUserAction;
