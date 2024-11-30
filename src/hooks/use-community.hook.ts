import { useFollowUser, useUnfollowUser } from "../api/user/user.querys";
import useCommunityStore from "../store/community/community.store";

export const useCommunity = () => {
  const { followings, followAction, unfollowAction } = useCommunityStore();

  const { followIsPending, followMutate } = useFollowUser();
  const { unfollowIsPending, unfollowMutate } = useUnfollowUser();

  const followUser = (userId: number) => {
    followMutate(userId, {
      onSuccess: () => {
        followAction(userId);
      },
    });
  };

  const unfollowUser = (userId: number) => {
    unfollowMutate(userId, {
      onSuccess: () => {
        unfollowAction(userId);
      },
    });
  };

  return {
    followUser,
    unfollowUser,
    followings,
    isPending: followIsPending || unfollowIsPending,
  };
};
