import { FC, useEffect, useState } from "react";
import Modal from "../../../../../../components/modal/Modal";
import Select from "../../../../../../components/select/Select";
import { t } from "i18next";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SectionTypes } from "./constants/newspaper-section-form.constants";
import {
  newspaperSectionFormSchema,
  NewspaperSectionFormSchemaType,
} from "./schemas/newspaper-section-form.schema";
import { renderNewspaperSectionForm } from "./helper/newspaper-section-form.helper";
import { NewspaperSectionFormProps } from "./@types/newspaper-section-form.type";
import { Box, Button, CircularProgress } from "@mui/material";
import {
  useNewsPaperAddSection,
  useNewsPaperEditSection,
} from "../../../../../../api/newspaper/newspaper.querys";
import { NewspaperSectionType } from "../../../../../../api/newspaper/newspaper.type";

const needFileSection = [
  NewspaperSectionType.HeaderBanner,
  NewspaperSectionType.TopNewsCard,
];

const NewspaperSectionForm: FC<NewspaperSectionFormProps> = ({
  open,
  onClose,
  newsPaperId,
  onSuccess,
  sectionDefaultValue,
  resetDefaultValue,
}) => {
  const { NewsPaperAddSectionMutate, NewsPaperAddSectionIsPending } =
    useNewsPaperAddSection();

  const { NewsPaperEditSectionMutate, NewsPaperEditSectionIsPending } =
    useNewsPaperEditSection();

  const [file, setFile] = useState<File | string | null>(null);
  const methods = useForm<NewspaperSectionFormSchemaType>({
    resolver: yupResolver(newspaperSectionFormSchema),
    defaultValues: {
      type: NewspaperSectionType.FullArticleSection,
      order: 10,
      title: [],
      paragraph: [],
    },
  });

  const { watch, setValue, handleSubmit, reset, clearErrors } = methods;

  console.log(watch());

  const typeState = watch("type");

  useEffect(() => {
    const newTypeState = typeState;

    if (sectionDefaultValue && sectionDefaultValue.type === typeState) return;

    reset({
      type: newTypeState,
      order: 10,
      title:
        typeState === NewspaperSectionType.HeaderBanner
          ? ["Header Banner"]
          : [""],
      paragraph:
        typeState === NewspaperSectionType.HeaderBanner
          ? ["Header Banner"]
          : [""],
    });
    clearErrors();
    setFile(null);
  }, [typeState]);

  useEffect(() => {
    clearErrors();
  }, [open]);

  useEffect(() => {
    clearErrors();
  }, [open]);

  useEffect(() => {
    if (sectionDefaultValue) {
      const { type, title, paragraph, order, image } = sectionDefaultValue;

      reset({
        type: type as unknown as NewspaperSectionType,
        title,
        paragraph,
        order,
      });

      setValue("title", title);
      setValue("paragraph", paragraph);
      setFile(image);
    }
  }, [sectionDefaultValue]);

  const handleClose = () => {
    reset({
      type: NewspaperSectionType.FullArticleSection,
      order: 10,
    });
    resetDefaultValue?.();
    onClose();
  };

  const handleChangeSectionType = (value: string | number) => {
    setValue("type", value as NewspaperSectionType);
  };

  const handleSubmitSection = handleSubmit((data: any) => {
    const resultData = {
      ...data,
      newsPaperId,
      ...(sectionDefaultValue ? { sectionId: sectionDefaultValue.id } : {}),
      ...(file ? { image: file } : {}),
    };

    if (sectionDefaultValue) {
      return NewsPaperEditSectionMutate(resultData, {
        onSuccess: () => {
          onSuccess?.();
          resetDefaultValue?.();
          handleClose();
        },
      });
    }

    NewsPaperAddSectionMutate(resultData, {
      onSuccess: () => {
        onSuccess?.();
        resetDefaultValue?.();
        handleClose();
      },
    });
  });

  return (
    <Modal open={open} onClose={handleClose} className="relative">
      <FormProvider {...methods}>
        {(NewsPaperAddSectionIsPending || NewsPaperEditSectionIsPending) && (
          <Box className="absolute w-full h-full top-0 left-0 backdrop-blur-sm flex justify-center items-center z-10">
            <CircularProgress />
          </Box>
        )}

        <Select
          label={t("Section")}
          value={typeState}
          options={SectionTypes}
          onChange={handleChangeSectionType}
          disabled={!!sectionDefaultValue}
        />
        <Box className="my-2">
          {renderNewspaperSectionForm(
            typeState,
            needFileSection.includes(typeState) ? { file, setFile } : undefined
          )}
        </Box>

        <Box className="flex items-center gap-2 w-full justify-center">
          <Button onClick={() => handleClose()}>{t("cancel")}</Button>
          <Button variant="contained" onClick={handleSubmitSection}>
            {t("submit")}
          </Button>
        </Box>
      </FormProvider>
    </Modal>
  );
};

export default NewspaperSectionForm;
