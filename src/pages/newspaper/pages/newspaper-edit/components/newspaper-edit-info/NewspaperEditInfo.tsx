import { FormProvider, useForm } from "react-hook-form";
import TextInput from "../../../../../../components/text-input/TextInput";
import {
  newspaperInfoSchema,
  NewspaperInfoSchemaType,
} from "./schemas/newspaper-edit-info.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { t } from "i18next";
import { useGetPosters } from "../../../../../../api/theme/theme.querys";
import { Box, Button } from "@mui/material";
import { getImageUrl } from "../../../../../../utils/get-image-url.util";
import { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  useGetOneNewsPaper,
  useNewsPaperEditInfo,
} from "../../../../../../api/newspaper/newspaper.querys";
import { mergeClasses } from "../../../../../../utils/merge-classess.util";
import SuspansLoader from "../../../../../../components/suspans-loader/SuspansLoader";
import toast from "react-hot-toast";
import { NewspaperEditInfoProps } from "./@types/newspaper-edit-info.type";
import Modal from "../../../../../../components/modal/Modal";

const NewspaperEditInfo: FC<NewspaperEditInfoProps> = ({ open, onClose }) => {
  const [searchParams] = useSearchParams();

  const newspaperId = searchParams.get("newspaperId");
  const id = parseInt(newspaperId || "");

  const methods = useForm<NewspaperInfoSchemaType>({
    resolver: yupResolver(newspaperInfoSchema),
  });

  const { watch, setValue, reset, getValues } = methods;

  const { getPostersData } = useGetPosters({
    page: 1,
    pageSize: 50,
  });

  const { NewsPaperEditInfoMutate, NewsPaperEditInfoIsPending } =
    useNewsPaperEditInfo();

  const { getOneNewsPapersData, getOneNewsPapersIsPending } =
    useGetOneNewsPaper(id);

  useEffect(() => {
    if (getOneNewsPapersData) {
      const { posterId, title, description } = getOneNewsPapersData;
      reset({
        title,
        description,
        posterId,
      });
    }
  }, [getOneNewsPapersData]);

  const selectedPoster = watch("posterId");

  const handleCancelForm = () => {
    onClose();
  };

  const handleSubmitForm = () => {
    const data = getValues();

    NewsPaperEditInfoMutate(
      {
        ...data,
        newsPaperId: id,
      },
      {
        onSuccess: (res) => {
          toast.success(res.message);
          onClose();
        },
      }
    );
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="relative">
        {getOneNewsPapersIsPending ||
          (NewsPaperEditInfoIsPending && (
            <Box className="absolute top-0 left-0 bg-secondary-600 z-50 w-full h-full ">
              <SuspansLoader />
            </Box>
          ))}

        <FormProvider {...methods}>
          <TextInput label={t("title")} name="title" variant="outlined" />
          <TextInput
            label={t("desc")}
            name="description"
            variant="outlined"
            multiline
            minRows={2}
          />

          <Box className="w-full grid grid-cols-12 gap-4">
            {getPostersData?.map((poster) => (
              <Box
                key={poster.id}
                className={mergeClasses(
                  "md:col-span-4 sm:col-span-6 col-span-12 rounded-md cursor-pointer grayscale overflow-hidden",
                  selectedPoster === poster.id &&
                    "border-2 border-solid border-primary-600 grayscale-0"
                )}
                onClick={() => setValue("posterId", poster.id)}
              >
                <img
                  className="w-full h-72"
                  src={getImageUrl(poster.imageUrl)}
                  alt="poster"
                />
              </Box>
            ))}
          </Box>

          <Box className="sticky -bottom-4 w-full flex justify-center p-4 bg-secondary-600 gap-2">
            <Button onClick={handleCancelForm} variant="outlined">
              {t("cancel")}
            </Button>
            <Button onClick={handleSubmitForm} variant="contained">
              {t("submit")}
            </Button>
          </Box>
        </FormProvider>
      </Box>
    </Modal>
  );
};

export default NewspaperEditInfo;
