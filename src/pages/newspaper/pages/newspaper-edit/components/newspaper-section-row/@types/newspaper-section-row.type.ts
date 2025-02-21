import { NewspaperSection } from "../../../../../../../api/newspaper/newspaper.type";

export type NewspaperSectionRowProps = NewspaperSection & {
  onClick: () => void;
  refetchSections: () => void;
};
