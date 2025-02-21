import { NewspaperSectionType } from "../../../../../../../api/newspaper/newspaper.type";
import { SectionFileProps } from "../@types/newspaper-section-form.type";
import FullArticleSection from "../sections/FullArticleSection";
import HeaderBannerSection from "../sections/HeaderBannerSection";
import NewsSummarySection from "../sections/NewsSummarySection";
import TopNewsCardSection from "../sections/TopNewsCardSection";

export const renderNewspaperSectionForm = (
  type: NewspaperSectionType,
  props?: SectionFileProps
) => {
  switch (type) {
    case NewspaperSectionType.FullArticleSection:
      return <FullArticleSection />;
    case NewspaperSectionType.HeaderBanner:
      return <HeaderBannerSection {...(props as SectionFileProps)} />;
    case NewspaperSectionType.NewsSummarySection:
      return <NewsSummarySection />;
    case NewspaperSectionType.TopNewsCard:
      return <TopNewsCardSection {...(props as SectionFileProps)} />;
    default:
      return <FullArticleSection />;
  }
};
