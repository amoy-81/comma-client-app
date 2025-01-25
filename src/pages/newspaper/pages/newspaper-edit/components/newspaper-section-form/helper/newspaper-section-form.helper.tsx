import {
  NewspaperSectionFormType,
  SectionFileProps,
} from "../@types/newspaper-section-form.type";
import FullArticleSection from "../sections/FullArticleSection";
import HeaderBannerSection from "../sections/HeaderBannerSection";
import NewsSummarySection from "../sections/NewsSummarySection";
import TopNewsCardSection from "../sections/TopNewsCardSection";

export const renderNewspaperSectionForm = (
  type: NewspaperSectionFormType,
  props?: SectionFileProps
) => {
  switch (type) {
    case NewspaperSectionFormType.FullArticleSection:
      return <FullArticleSection />;
    case NewspaperSectionFormType.HeaderBanner:
      return <HeaderBannerSection {...(props as SectionFileProps)} />;
    case NewspaperSectionFormType.NewsSummarySection:
      return <NewsSummarySection />;
    case NewspaperSectionFormType.TopNewsCard:
      return <TopNewsCardSection {...(props as SectionFileProps)} />;
    default:
      return <FullArticleSection />;
  }
};
