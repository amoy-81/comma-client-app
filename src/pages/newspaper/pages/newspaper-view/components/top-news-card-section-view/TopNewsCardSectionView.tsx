import { Box } from "@mui/material";
import { FC } from "react";
import FullArticleSectionView from "../full-article-section-view/FullArticleSectionView";
import { NewspaperSection } from "../../../../../../api/newspaper/newspaper.type";
import { getImageUrl } from "../../../../../../utils/get-image-url.util";

const TopNewsCardSectionView: FC<NewspaperSection> = ({ ...props }) => {
  return (
    <Box className="flex gap-4 justify-between">
      <FullArticleSectionView {...props} />
      <img src={getImageUrl(props.image)} className="w-1/2" />
    </Box>
  );
};

export default TopNewsCardSectionView;
