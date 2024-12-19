import axiosInstance from "../../services/http.service";
import {
  GetNotifReadResponse,
  GetNotifUnreadCountResponse,
  GetNotifUnreadResponse,
} from "./notif.type";
import { NotifUrls } from "./notif.urls";

const useNotifAction = () => {
  const getReadNotifAction = async (): Promise<GetNotifReadResponse> => {
    const response = await axiosInstance
      .get(NotifUrls.Read)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const getUnreadNotifAction = async (): Promise<GetNotifUnreadResponse> => {
    const response = await axiosInstance
      .get(NotifUrls.Unread)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const getUnreadCountNotifAction =
    async (): Promise<GetNotifUnreadCountResponse> => {
      const response = await axiosInstance
        .get(NotifUrls.UnreadCount)
        .then((res) => res.data)
        .catch((err) => err);

      return response;
    };

  return {
    getReadNotifAction,
    getUnreadNotifAction,
    getUnreadCountNotifAction,
  };
};

export default useNotifAction;
