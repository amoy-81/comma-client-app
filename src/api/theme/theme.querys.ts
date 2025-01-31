import { useQuery } from "@tanstack/react-query";
import useThemeAction from "./theme.actions";
import { ThemeKeys } from "./theme.keys";
import { GetPostersParams } from "./theme.type";

export const useGetPosters = (params: GetPostersParams) => {
  const { getPostersAction } = useThemeAction();

  const { data, isLoading } = useQuery({
    queryKey: [ThemeKeys.poster, params.page, params.pageSize],
    queryFn: () => getPostersAction(params),
  });

  return {
    getPostersData: data,
    getPostersLoading: isLoading,
  };
};
