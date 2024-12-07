import axiosInstance from "../../services/http.service";
import { generateQueryParams } from "../../utils/generate-query-params.util";
import {
  CreateCommentResponse,
  CreateCommentsRequest,
  GetCommentListParams,
  GetCommentListResponse,
  VoteCommentResponse,
} from "./comment.type";
import { CommentUrls } from "./comment.urls";

const useCommentAction = () => {
  const createCommentAction = async (
    data: CreateCommentsRequest
  ): Promise<CreateCommentResponse> => {
    const response = await axiosInstance
      .post(CommentUrls.Create, data)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const getCommentListAction = async (
    params: GetCommentListParams
  ): Promise<GetCommentListResponse> => {
    const { postId, ...paginationParams } = params;

    const queryParams = generateQueryParams(paginationParams);

    const url = `${CommentUrls.GetList}/${postId}${
      queryParams ? `?${queryParams}` : ""
    }`;

    const response = await axiosInstance
      .get(url)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const voteCommentAction = async (
    postId: number
  ): Promise<VoteCommentResponse> => {
    const response = await axiosInstance
      .put(`${CommentUrls.Vote}/${postId}`)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  return { createCommentAction, getCommentListAction, voteCommentAction };
};

export default useCommentAction;
