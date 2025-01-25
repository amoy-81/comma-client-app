import { FC } from "react";
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
import {
  NewspaperSectionFormProps,
  NewspaperSectionFormType,
} from "./@types/newspaper-section-form.type";
import { Box, Button } from "@mui/material";

const NewspaperSectionForm: FC<NewspaperSectionFormProps> = ({
  open,
  onClose,
}) => {
  const methods = useForm<NewspaperSectionFormSchemaType>({
    resolver: yupResolver(newspaperSectionFormSchema),
    defaultValues: {
      type: NewspaperSectionFormType.FullArticleSection,
    },
  });

  const { watch, setValue } = methods;

  const typeState = watch("type");

  const handleChangeSectionType = (value: string | number) => {
    setValue("type", value as NewspaperSectionFormType);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <FormProvider {...methods}>
        <Select
          label={t("Section")}
          value={typeState}
          options={SectionTypes}
          onChange={handleChangeSectionType}
        />
        <Box className="mt-2">{renderNewspaperSectionForm(typeState)}</Box>

        <Box className="flex items-center gap-2 w-full justify-center">
          <Button>{t("cancel")}</Button>
          <Button variant="contained"> {t("submit")}</Button>
        </Box>
      </FormProvider>
    </Modal>
  );
};

export default NewspaperSectionForm;
