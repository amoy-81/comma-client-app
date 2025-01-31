import axiosInstance from "../../services/http.service";
import { generateQueryParams } from "../../utils/generate-query-params.util";
import { GetPostersParams, GetPostersResponse } from "./theme.type";
import { ThemeUrls } from "./theme.urls";

const useThemeAction = () => {
  const getPostersAction = async (
    params: GetPostersParams
  ): Promise<GetPostersResponse> => {
    const queryParams = generateQueryParams(params);

    const url = `${ThemeUrls.Poster}${queryParams ? `?${queryParams}` : ""}`;

    const response = await axiosInstance
      .get(url)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  return { getPostersAction };
};

export default useThemeAction;
