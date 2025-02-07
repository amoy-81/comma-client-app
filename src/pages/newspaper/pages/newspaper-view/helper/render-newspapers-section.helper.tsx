import {
  NewspaperSection,
  NewspaperSectionType,
} from "../../../../../api/newspaper/newspaper.type";
import FullArticleSectionView from "../components/full-article-section-view/FullArticleSectionView";
import HeaderBannerSectionView from "../components/header-banner-section-view/HeaderBannerSectionView";
import NewSummarySectionView from "../components/new-summary-section-view/NewSummarySectionView";
import TopNewsCardSectionView from "../components/top-news-card-section-view/TopNewsCardSectionView";

export const renderNewspaperSection = (
  sectionType: NewspaperSectionType,
  sectionData: NewspaperSection
) => {
  switch (sectionType) {
    case NewspaperSectionType.FullArticleSection:
      return <FullArticleSectionView {...sectionData} />;
    case NewspaperSectionType.TopNewsCard:
      return <TopNewsCardSectionView {...sectionData} />;
    case NewspaperSectionType.NewsSummarySection:
      return <NewSummarySectionView {...sectionData} />;
    case NewspaperSectionType.HeaderBanner:
      return <HeaderBannerSectionView {...sectionData} />;
    default:
      return FullArticleSectionView;
  }
};
