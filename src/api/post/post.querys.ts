import { useMutation } from "@tanstack/react-query";
import useUserAction from "./post.actions";
import { UserKeys } from "./post.keys";
import { SearchUserParams, UpdateProfileRequest } from "./post.type";

export const useGetUser = () => {
  const { getUserById } = useUserAction();

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [UserKeys.getUserById],
    mutationFn: (userId: number) => getUserById(userId),
  });

  return {
    getUserData: data,
    getUserMutate: mutate,
    getUserIsPending: isPending,
    getUserIsSuccess: isSuccess,
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
