import React from "react";
import { Box, Avatar, Button } from "@mui/material";
import {
  useGetUnreadNotif,
  useGetReadNotif,
} from "../../api/notif/notif.querys";
import { formatDate } from "../../utils/format-date.util";
import NotifSkeleton from "./NotifSkeleton";
import { mergeClasses } from "../../utils/merge-classess.util";
import { Notif } from "../../api/notif/notif.type";

const NotifPage: React.FC = () => {
  const { getUnreadNotifData, getUnreadNotifLoading } = useGetUnreadNotif();
  const { getReadNotifData, getReadNotifLoading } = useGetReadNotif();

  if (getUnreadNotifLoading || getReadNotifLoading) {
    return (
      <Box className="min-h-screen bg-secondary-900 text-white flex justify-center items-center">
        <NotifSkeleton />
      </Box>
    );
  }

  const unreadNotifications = getUnreadNotifData || [];
  const readNotifications = getReadNotifData || [];
  const allNotifications = [...unreadNotifications, ...readNotifications];

  return (
    <Box className="min-h-screen bg-secondary-900 text-white p-4">
      <Box className="space-y-4">
        {allNotifications.map((notif) => (
          <NotificationItem key={notif.id} notif={notif} />
        ))}
      </Box>
    </Box>
  );
};

const NotificationItem: React.FC<{ notif: Notif }> = ({ notif }) => {
  const sender = notif.sender || {};

  const renderActionButton = (subject: string) => {
    if (subject === "LIKE") {
      return (
        <Button
          variant="contained"
          color="primary"
          size="small"
          className="!bg-secondary-600 w-24 h-8 !text-white !rounded-sm"
        >
          VIEW
        </Button>
      );
    } else if (subject === "COMMENT") {
      return (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className="!bg-secondary-600 w-24 h-8 !text-white !rounded-sm"
        >
          REPLAY
        </Button>
      );
    }
  };

  return (
    <Box
      className={mergeClasses(
        "relative p-4 bg-secondary-900 rounded-xl grid grid-cols-12 items-center",
        !notif.isRead && "border border-solid !border-primary-600"
      )}
      style={{
        border: "1px solid #1E293B",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box className="col-span-1">
        <Avatar
          src={sender.avatar || ""}
          alt={sender.name || "User"}
          className="!w-12 !h-12 !bg-secondary-600"
        />
      </Box>

      <Box className="col-span-9 ml-4">
        <Box>
          <p className="font-semibold text-white">
            {sender.name || "Unknown User"}
          </p>
          <p className="text-sm text-gray-400">
            {sender.email || "No email provided"}
          </p>
        </Box>
        <p className="text-sm mt-1 text-gray-300">
          {notif.message || "No message"}
        </p>
      </Box>

      <Box className="col-span-2 flex flex-col items-end">
        <p className="text-gray-500 text-xs mb-2">
          {formatDate(notif.createdAt) || "Just now"}
        </p>
        {renderActionButton(notif.subject)}
      </Box>
    </Box>
  );
};

export default NotifPage;
