import { t } from "i18next";
import * as yup from "yup";
import { NewspaperSectionFormType } from "../@types/newspaper-section-form.type";

const { FullArticleSection, NewsSummarySection, TopNewsCard, HeaderBanner } =
  NewspaperSectionFormType;

const SectionTypes = [
  FullArticleSection,
  NewsSummarySection,
  TopNewsCard,
  HeaderBanner,
];

export const newspaperSectionFormSchema = yup.object({
  type: yup
    .string()
    .oneOf(SectionTypes, t("validation.invalidSectionType"))
    .required(t("validation.requiredSectionType")),
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
