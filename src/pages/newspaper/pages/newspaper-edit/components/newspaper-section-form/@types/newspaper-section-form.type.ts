export enum NewspaperSectionFormType {
  "TopNewsCard" = "TopNewsCard",
  "NewsSummarySection" = "NewsSummarySection",
  "FullArticleSection" = "FullArticleSection",
  "HeaderBanner" = "HeaderBanner",
}

export type NewspaperSectionFormProps = {
  open: boolean;
  onClose: () => void;
};
