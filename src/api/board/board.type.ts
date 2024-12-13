import { Pagination } from "../@types/pagination.type";
import { User } from "../user/user.type";

export type AddBoardRequest = {
  text: string;
};

export type AddBoardResponse = {
  text: string;
  userId: number;
  id: number;
  createdAt: string;
  updatedAt: string;
};

export type GetBoardParams = Pagination;

export type GetBoardResponse = (AddBoardResponse & {
  user: User;
})[];
