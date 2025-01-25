import { NewspaperSectionFormType } from "../@types/newspaper-section-form.type";
import FullArticleSection from "../sections/FullArticleSection";
import HeaderBannerSection from "../sections/HeaderBannerSection";
import NewsSummarySection from "../sections/NewsSummarySection";
import TopNewsCardSection from "../sections/TopNewsCardSection";

export const renderNewspaperSectionForm = (type: NewspaperSectionFormType) => {
  switch (type) {
    case NewspaperSectionFormType.FullArticleSection:
      return <FullArticleSection />;
    case NewspaperSectionFormType.HeaderBanner:
      return <HeaderBannerSection />;
    case NewspaperSectionFormType.NewsSummarySection:
      return <NewsSummarySection />;
    case NewspaperSectionFormType.TopNewsCard:
      return <TopNewsCardSection />;
    default:
      return <FullArticleSection />;
  }
};
