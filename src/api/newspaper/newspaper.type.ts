import { Pagination } from "../@types/pagination.type";
import { Poster } from "../theme/theme.type";
import { User } from "../user/user.type";

export enum NewspaperSectionType {
  TopNewsCard = "TopNewsCard",
  NewsSummarySection = "NewsSummarySection",
  FullArticleSection = "FullArticleSection",
  HeaderBanner = "HeaderBanner",
}

export type NewspaperSection = {
  id: number;
  newsPaperId: number;
  type: NewspaperSectionType;
  title: string[];
  image: string;
  paragraph: string[];
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type Newspaper = {
  id: number;
  title: string;
  description: string;
  views: number;
  posterId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  sections: NewspaperSection[];
  user: User;
  poster: Poster;
};

export type CreateNewsPapersResponse = {
  news_paper_id: number;
  message: string;
};

export type GetTodayNewsPapersParams = Pagination;

export type GetTodayNewsPapersResponse = {
  data: Newspaper[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
};

export type GetOneNewsPapersResponse = Newspaper;

export type NewsPaperAddSectionRequest = {
  newsPaperId: number;
  type: string;
  title: string[];
  paragraph: string[];
  order: number;
  image?: File;
};

export type NewsPaperAddSectionResponse = {
  id: number;
  message: string;
};

export type NewsPaperEditSectionRequest = Partial<
  Omit<NewsPaperAddSectionRequest, "newsPaperId">
> & { sectionId: number };

export type NewsPaperEditSectionResponse = {
  id: number;
  message: string;
  newsPaperId: string;
};

export type NewsPaperEditInfoRequest = {
  newsPaperId: number;
  title?: string;
  description?: string;
  posterId?: number;
};

export type NewsPaperEditInfoResponse = {
  message: string;
  newsPaper: Omit<Newspaper, "section" | "user" | "poster">;
};

export type NewsPaperDeleteSectionParams = {
  sectionId: number;
};

export type NewsPaperDeleteSectionResponse = {
  id: number;
  message: string;
};
