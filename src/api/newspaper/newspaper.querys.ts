import { useMutation, useQuery } from "@tanstack/react-query";
import useNewspaperAction from "./newspaper.actions";
import { NewspaperKeys } from "./newspaper.keys";
import {
  GetTodayNewsPapersParams,
  NewsPaperAddSectionRequest,
  NewsPaperEditInfoRequest,
  NewsPaperEditSectionRequest,
} from "./newspaper.type";

export const useGetTodayNewsPapers = (params: GetTodayNewsPapersParams) => {
  const { getTodayNewspapersAction } = useNewspaperAction();
  const { data, isLoading } = useQuery({
    queryKey: [NewspaperKeys.getAll, params.page, params.pageSize],
    queryFn: () => getTodayNewspapersAction(params),
    staleTime: 2 * 60 * 60 * 1000,
    gcTime: 2 * 60 * 60 * 1000,
  });

  return {
    getTodayNewsPapersData: data,
    getTodayNewsPapersLoading: isLoading,
  };
};

export const useGetOneNewsPaper = (newsPaperId: number) => {
  const { getOneNewspaperAction } = useNewspaperAction();
  const { data, isPending, refetch } = useQuery({
    queryKey: [NewspaperKeys.getOne, newsPaperId],
    queryFn: () => getOneNewspaperAction(newsPaperId),
  });

  return {
    getOneNewsPapersData: data,
    getOneNewsPapersRefetch: refetch,
    getOneNewsPapersIsPending: isPending,
  };
};

export const useCreateNewsPaper = () => {
  const { createNewspaperAction } = useNewspaperAction();
  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [NewspaperKeys.create],
    mutationFn: () => createNewspaperAction(),
  });

  return {
    createNewsPaperData: data,
    createNewsPaperMutate: mutate,
    createNewsPaperIsPending: isPending,
    createNewsPaperIsSuccess: isSuccess,
  };
};

export const useNewsPaperAddSection = () => {
  const { addSectionNewspaperAction } = useNewspaperAction();
  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [NewspaperKeys.addSection],
    mutationFn: (data: NewsPaperAddSectionRequest) =>
      addSectionNewspaperAction(data),
  });

  return {
    NewsPaperAddSectionData: data,
    NewsPaperAddSectionMutate: mutate,
    NewsPaperAddSectionIsPending: isPending,
    NewsPaperAddSectionIsSuccess: isSuccess,
  };
};

export const useNewsPaperEditSection = () => {
  const { editSectionNewspaperAction } = useNewspaperAction();
  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [NewspaperKeys.editSection],
    mutationFn: (data: NewsPaperEditSectionRequest) =>
      editSectionNewspaperAction(data),
  });

  return {
    NewsPaperEditSectionData: data,
    NewsPaperEditSectionMutate: mutate,
    NewsPaperEditSectionIsPending: isPending,
    NewsPaperEditSectionIsSuccess: isSuccess,
  };
};

export const useNewsPaperEditInfo = () => {
  const { editInfoNewspaperAction } = useNewspaperAction();
  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [NewspaperKeys.editInfo],
    mutationFn: (data: NewsPaperEditInfoRequest) =>
      editInfoNewspaperAction(data),
  });

  return {
    NewsPaperEditInfoData: data,
    NewsPaperEditInfoMutate: mutate,
    NewsPaperEditInfoIsPending: isPending,
    NewsPaperEditInfoIsSuccess: isSuccess,
  };
};

export const useNewsPaperDeleteSection = () => {
  const { deleteSectionNewspaperAction } = useNewspaperAction();
  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [NewspaperKeys.deleteSection],
    mutationFn: (sectionId: number) => deleteSectionNewspaperAction(sectionId),
  });

  return {
    NewsPaperDeleteSectionData: data,
    NewsPaperDeleteSectionMutate: mutate,
    NewsPaperDeleteSectionIsPending: isPending,
    NewsPaperDeleteSectionIsSuccess: isSuccess,
  };
};
