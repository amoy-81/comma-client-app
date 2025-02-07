import { FC } from "react";
import { NewspaperSection } from "../../../../../../api/newspaper/newspaper.type";

const HeaderBannerSectionView: FC<NewspaperSection> = ({ ...props }) => {
  return <img src={props.image} className="w-full max-h-[600px]" />;
};

export default HeaderBannerSectionView;
