import { NewspaperSection } from "../../../../../../../api/newspaper/newspaper.type";

export enum NewspaperSectionFormType {
  "TopNewsCard" = "TopNewsCard",
  "NewsSummarySection" = "NewsSummarySection",
  "FullArticleSection" = "FullArticleSection",
  "HeaderBanner" = "HeaderBanner",
}

export type NewspaperSectionFormProps = {
  open: boolean;
  onClose: () => void;
  newsPaperId: number;
  onSuccess?: () => void;
  sectionDefaultValue?: NewspaperSection | null;
  resetDefaultValue?: () => void;
};

export type SectionFileProps = {
  file: File | null;
  setFile: (file: File | null) => void;
};
