import axiosInstance from "../../services/http.service";
import { generateQueryParams } from "../../utils/generate-query-params.util";
import {
  AddBoardRequest,
  AddBoardResponse,
  GetBoardParams,
  GetBoardResponse,
} from "./board.type";
import { BoardUrls } from "./board.urls";

const useBoardAction = () => {
  const addBoardAction = async (
    data: AddBoardRequest
  ): Promise<AddBoardResponse> => {
    const response = await axiosInstance
      .post(BoardUrls.Board, data)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const getBoardAction = async (
    params: GetBoardParams
  ): Promise<GetBoardResponse> => {
    const queryParams = generateQueryParams(params);

    const url = `${BoardUrls.Board}${queryParams ? `?${queryParams}` : ""}`;

    const response = await axiosInstance
      .get(url)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  return { addBoardAction, getBoardAction };
};

export default useBoardAction;
