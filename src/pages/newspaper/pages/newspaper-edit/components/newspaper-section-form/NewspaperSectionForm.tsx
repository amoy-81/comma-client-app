import { FC } from "react";
import Modal from "../../../../../../components/modal/Modal";
import Select from "../../../../../../components/select/Select";
import { t } from "i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type NewspaperSectionFormProps = {
  open: boolean;
  onClose: () => void;
};

const validationSchema = yup.object({
  sectionType: yup.string().required(t("SectionTypeIsRequired")),
});

type FormValues = {
  sectionType: string;
};

const sectionTypes = [
  { label: t("TopNewsCard"), value: "TopNewsCard" },
  { label: t("NewsSummarySection"), value: "NewsSummarySection" },
  { label: t("FullArticleSection"), value: "FullArticleSection" },
  { label: t("HeaderBanner"), value: "HeaderBanner" },
];

const NewspaperSectionForm: FC<NewspaperSectionFormProps> = ({
  open,
  onClose,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      sectionType: "",
    },
  });

  const handleChangeSectionType = (value: string | number) => {
    console.log(value);
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Select options={sectionTypes} onChange={handleChangeSectionType} />
    </Modal>
  );
};

export default NewspaperSectionForm;
