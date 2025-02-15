import { NewspaperSection } from "../../../../../../../api/newspaper/newspaper.type";

export type NewspaperSectionFormProps = {
  open: boolean;
  onClose: () => void;
  newsPaperId: number;
  onSuccess?: () => void;
  sectionDefaultValue?: NewspaperSection | null;
  resetDefaultValue?: () => void;
};

export type SectionFileProps = {
  file: File | string | null;
  setFile: (file: File | null) => void;
};
