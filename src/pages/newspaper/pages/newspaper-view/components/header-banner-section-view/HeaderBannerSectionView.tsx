import { FC } from "react";
import { NewspaperSection } from "../../../../../../api/newspaper/newspaper.type";
import { getImageUrl } from "../../../../../../utils/get-image-url.util";

const HeaderBannerSectionView: FC<NewspaperSection> = ({ ...props }) => {
  return (
    <img src={getImageUrl(props.image)} className="w-full max-h-[600px]" />
  );
};

export default HeaderBannerSectionView;
