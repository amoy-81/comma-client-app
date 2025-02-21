import { t } from "i18next";
import * as yup from "yup";
import { NewspaperSectionType } from "../../../../../../../api/newspaper/newspaper.type";

export const newspaperSectionFormSchema = yup.object({
  type: yup
    .mixed<NewspaperSectionType>()
    .oneOf(
      Object.values(NewspaperSectionType) as NewspaperSectionType[],
      t("validation.invalidSectionType")
    )
    .required(t("validation.requiredSectionType"))
    .default(NewspaperSectionType.FullArticleSection),
  title: yup
    .array()
    .of(yup.string().required(t("validation.requiredTitle")))
    .required(t("validation.requiredTitleArray")),
  paragraph: yup
    .array()
    .of(yup.string().required(t("validation.requiredParagraph")))
    .required(t("validation.requiredParagraphArray")),
  order: yup
    .number()
    .required(t("validation.requiredOrder"))
    .integer(t("validation.orderMustBeInteger")),
});

export type NewspaperSectionFormSchemaType = yup.InferType<
  typeof newspaperSectionFormSchema
>;
