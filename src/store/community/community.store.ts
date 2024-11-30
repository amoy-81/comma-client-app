import { create } from "zustand";
import { CommunityState } from "./community.type";

const useCommunityStore = create<CommunityState>((set) => ({
  followings: [],
  followAction: (userId) => {
    set((prev) => ({ followings: [...prev.followings, userId] }));
  },
  unfollowAction: (userId) => {
    set((prev) => ({
      followings: prev.followings.filter((id) => id !== userId),
    }));
  },
  setFollowings: (followings) => {
    set({ followings: followings.map((user) => user.id) });
  },
}));

export default useCommunityStore;
