import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BoardKeys } from "./board.keys";
import useBoardAction from "./board.actions";
import { AddBoardRequest, GetBoardParams } from "./board.type";

export const useBoardComment = () => {
  const queryClient = useQueryClient();
  const { addBoardAction } = useBoardAction();

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [BoardKeys.add],
    mutationFn: (data: AddBoardRequest) => addBoardAction(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [BoardKeys.get] });
    },
  });

  return {
    addBoardData: data,
    addBoardMutate: mutate,
    addBoardIsPending: isPending,
    addBoardIsSuccess: isSuccess,
  };
};

export const useGetBoard = (params: GetBoardParams) => {
  const { getBoardAction } = useBoardAction();

  const { data, isLoading, refetch } = useQuery({
    queryKey: [BoardKeys.get, params.page, params.pageSize],
    queryFn: () => getBoardAction(params),
    staleTime: 0,
    gcTime: 0,
    refetchInterval: 20000,
  });

  return {
    getBoardData: data,
    getBoardLoading: isLoading,
    refetch,
  };
};
