import { User } from "../../api/user/user.type";

export type CommunityState = {
  followings: User["id"][];
  followAction: (userId: number) => void;
  unfollowAction: (userId: number) => void;
  setFollowings: (list: User[]) => void;
};
