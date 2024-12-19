import { User } from "../user/user.type";

export type Notif = {
  id: number;
  message: string;
  isRead: boolean;
  senderId: number;
  receiverId: number;
  subject: string;
  subjectId: number;
  createdAt: string;
  updatedAt: string;
  sender: User;
};

export type GetNotifReadResponse = Notif[];

export type GetNotifUnreadCountResponse = {
  count: number;
};

export type GetNotifUnreadResponse = Notif[];
