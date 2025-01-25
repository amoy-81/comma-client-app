import { t } from "i18next";
import { NewspaperSectionFormType } from "../@types/newspaper-section-form.type";

export const SectionTypes = [
  {
    label: t("TopNewsCard") || "Top News Card",
    value: NewspaperSectionFormType.TopNewsCard,
  },
  {
    label: t("NewsSummarySection") || "NewsSummarySection",
    value: NewspaperSectionFormType.NewsSummarySection,
  },
  {
    label: t("FullArticleSection") || "FullArticleSection",
    value: NewspaperSectionFormType.FullArticleSection,
  },
  {
    label: t("HeaderBanner") || "HeaderBanner",
    value: NewspaperSectionFormType.HeaderBanner,
  },
];
