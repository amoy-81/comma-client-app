import { t } from "i18next";
import { NewspaperSectionType } from "../../../../../../../api/newspaper/newspaper.type";

export const SectionTypes = [
  {
    label: t("TopNewsCard") || "Top News Card",
    value: NewspaperSectionType.TopNewsCard,
  },
  {
    label: t("NewsSummarySection") || "NewsSummarySection",
    value: NewspaperSectionType.NewsSummarySection,
  },
  {
    label: t("FullArticleSection") || "FullArticleSection",
    value: NewspaperSectionType.FullArticleSection,
  },
  {
    label: t("HeaderBanner") || "HeaderBanner",
    value: NewspaperSectionType.HeaderBanner,
  },
];
