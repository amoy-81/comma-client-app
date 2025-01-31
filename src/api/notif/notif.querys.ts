import { useQuery } from "@tanstack/react-query";
import { NotifKeys } from "./notif.keys";
import useNotifAction from "./notif.actions";

export const useGetReadNotif = () => {
  const { getReadNotifAction } = useNotifAction();

  const { data, isLoading } = useQuery({
    queryKey: [NotifKeys.Read],
    queryFn: () => getReadNotifAction(),
    staleTime: 0,
    gcTime: 0,
    refetchInterval: 20000,
  });

  return {
    getReadNotifData: data,
    getReadNotifLoading: isLoading,
  };
};


export const useGetUnreadNotif = () => {
  const { getUnreadNotifAction } = useNotifAction();

  const { data, isLoading } = useQuery({
    queryKey: [NotifKeys.Unread],
    queryFn: () => getUnreadNotifAction(),
    staleTime: 0,
    gcTime: 0,
    refetchInterval: 20000,
  });

  return {
    getUnreadNotifData: data,
    getUnreadNotifLoading: isLoading,
  };
};


export const useGetUnreadCountNotif = () => {
  const { getUnreadCountNotifAction } = useNotifAction();

  const { data, isLoading } = useQuery({
    queryKey: [NotifKeys.UnreadCount],
    queryFn: () => getUnreadCountNotifAction(),
    staleTime: 0,
    gcTime: 0,
    refetchInterval: 20000,
  });

  return {
    getUnreadCountNotifData: data,
    getUnreadCountNotifLoading: isLoading,
  };
};
