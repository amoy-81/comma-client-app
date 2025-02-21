import axiosInstance from "../../services/http.service";
import { generateQueryParams } from "../../utils/generate-query-params.util";
import {
  CreateNewsPapersResponse,
  GetOneNewsPapersResponse,
  GetTodayNewsPapersParams,
  GetTodayNewsPapersResponse,
  NewsPaperAddSectionRequest,
  NewsPaperAddSectionResponse,
  NewsPaperDeleteSectionResponse,
  NewsPaperEditInfoRequest,
  NewsPaperEditInfoResponse,
  NewsPaperEditSectionRequest,
  NewsPaperEditSectionResponse,
} from "./newspaper.type";
import { NewspaperUrls } from "./newspaper.urls";

const useNewspaperAction = () => {
  const getTodayNewspapersAction = async (
    params: GetTodayNewsPapersParams
  ): Promise<GetTodayNewsPapersResponse> => {
    const queryParams = generateQueryParams(params);

    const url = `${NewspaperUrls.General}${
      queryParams ? `?${queryParams}` : ""
    }`;

    const response = await axiosInstance
      .get(url)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const getOneNewspaperAction = async (
    id: number
  ): Promise<GetOneNewsPapersResponse> => {
    const url = `${NewspaperUrls.General}/${id}`;

    const response = await axiosInstance
      .get(url)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const createNewspaperAction = async (): Promise<CreateNewsPapersResponse> => {
    const response = await axiosInstance
      .post(NewspaperUrls.General)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const addSectionNewspaperAction = async (
    data: NewsPaperAddSectionRequest
  ): Promise<NewsPaperAddSectionResponse> => {
    const response = await axiosInstance
      .post(NewspaperUrls.Section, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const editSectionNewspaperAction = async (
    data: NewsPaperEditSectionRequest
  ): Promise<NewsPaperEditSectionResponse> => {
    const { sectionId, ...sectionEditedData } = data;

    const response = await axiosInstance
      .put(`${NewspaperUrls.Section}/${sectionId}`, sectionEditedData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const editInfoNewspaperAction = async (
    data: NewsPaperEditInfoRequest
  ): Promise<NewsPaperEditInfoResponse> => {
    const { newsPaperId, ...editedData } = data;

    const response = await axiosInstance
      .put(`${NewspaperUrls.Info}/${newsPaperId}`, editedData)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  const deleteSectionNewspaperAction = async (
    newsPaperId: number
  ): Promise<NewsPaperDeleteSectionResponse> => {
    const response = await axiosInstance
      .delete(`${NewspaperUrls.Section}/${newsPaperId}`)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  return {
    getTodayNewspapersAction,
    getOneNewspaperAction,
    createNewspaperAction,
    addSectionNewspaperAction,
    editSectionNewspaperAction,
    editInfoNewspaperAction,
    deleteSectionNewspaperAction,
  };
};

export default useNewspaperAction;
