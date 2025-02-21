import { Box } from "@mui/material";
import { FC } from "react";
import { NewspaperSection } from "../../../../../../api/newspaper/newspaper.type";
import FullArticleSectionView from "../full-article-section-view/FullArticleSectionView";

const NewSummarySectionView: FC<NewspaperSection> = ({ ...props }) => {
  return (
    <Box className="flex gap-4">
      {[1, 2, 3].map((_, index) => (
        <FullArticleSectionView
          {...{
            ...props,
            title: [props.title[index]],
            paragraph: [props.paragraph[index]],
          }}
        />
      ))}
    </Box>
  );
};

export default NewSummarySectionView;
