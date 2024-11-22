import { useMutation, useQuery } from "@tanstack/react-query";
import useUserAction from "./user.actions";
import { UserKeys } from "./user.keys";
import { SearchUserParams, UpdateProfileRequest } from "./user.type";

export const useGetUser = (userId: number) => {
  const { getUserById } = useUserAction();

  const { data, isLoading } = useQuery({
    queryKey: [UserKeys.getUserById, userId],
    queryFn: () => getUserById(userId),
  });

  return {
    getUserData: data,
    getUserLoading: isLoading,
  };
};

export const useFollowUser = () => {
  const { followUser } = useUserAction();

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [UserKeys.follow],
    mutationFn: (userId: number) => followUser(userId),
  });

  return {
    followData: data,
    followMutate: mutate,
    followIsPending: isPending,
    followIsSuccess: isSuccess,
  };
};

export const useUnfollowUser = () => {
  const { unfollowUser } = useUserAction();

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [UserKeys.unfollow],
    mutationFn: (userId: number) => unfollowUser(userId),
  });

  return {
    unfollowData: data,
    unfollowMutate: mutate,
    unfollowIsPending: isPending,
    unfollowIsSuccess: isSuccess,
  };
};

export const useSearchUser = () => {
  const { searchInUsers } = useUserAction();

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [UserKeys.search],
    mutationFn: (params: SearchUserParams) => searchInUsers(params),
  });

  return {
    searchUserData: data,
    searchUserMutate: mutate,
    searchUserIsPending: isPending,
    searchUserIsSuccess: isSuccess,
  };
};

export const useUpdateProfile = () => {
  const { updateUserInfo } = useUserAction();

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [UserKeys.updateProfile],
    mutationFn: (params: UpdateProfileRequest) => updateUserInfo(params),
  });

  return {
    updateProfileData: data,
    updateProfileMutate: mutate,
    updateProfileIsPending: isPending,
    updateProfileIsSuccess: isSuccess,
  };
};
