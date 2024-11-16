import axiosInstance from "../../services/http.service";
import {
  FollowResponse,
  GetUserByIdResponse,
  SearchUserParams,
  SearchUserResponse,
  UnfollowResponse,
  UpdateProfileRequest,
} from "./user.type";
import { UserUrls } from "./user.urls";

const useUserAction = () => {
  const getUserById = async (userId: number): Promise<GetUserByIdResponse> => {
    const response = await axiosInstance
      .get(`${UserUrls.getUserById}/${userId}`)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const followUser = async (userId: number): Promise<FollowResponse> => {
    const response = await axiosInstance
      .put(`${UserUrls.follow}/${userId}`)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const unfollowUser = async (userId: number): Promise<UnfollowResponse> => {
    const response = await axiosInstance
      .put(`${UserUrls.unfollow}/${userId}`)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const searchInUsers = async (
    params: SearchUserParams
  ): Promise<SearchUserResponse> => {
    const { name, page, limit } = params;

    const response = await axiosInstance
      .get(`${UserUrls.search}?name=${name}&page=${page}&limit=${limit}`)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const updateUserInfo = async (
    body: UpdateProfileRequest
  ): Promise<SearchUserResponse> => {
    const { userId, ...data } = body;

    const response = await axiosInstance
      .put(`${UserUrls.updateProfile}/${userId}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  return {
    getUserById,
    followUser,
    unfollowUser,
    searchInUsers,
    updateUserInfo,
  };
};

export default useUserAction;
