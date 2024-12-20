import { Pagination } from "../@types/pagination.type";

export type Poster = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

export type GetPostersParams = Pagination;

export type GetPostersResponse = Poster[];
