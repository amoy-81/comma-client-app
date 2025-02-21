import { FC } from "react";
import { NewspaperSection } from "../../../../../../api/newspaper/newspaper.type";
import { Box, Typography } from "@mui/material";
import { detectDirection } from "../../../../../../utils/detect-direction.util";

const FullArticleSectionView: FC<NewspaperSection> = ({ title, paragraph }) => {
  return (
    <Box>
      <Typography
        className="md:!text-xl !text-[8px] !font-extrabold"
        dir={detectDirection(title[0])}
      >
        {title[0]}
      </Typography>
      <Typography
        className="md:!text-sm !text-[6px] !font-light"
        dir={detectDirection(paragraph[0])}
      >
        {paragraph[0]}
      </Typography>
    </Box>
  );
};

export default FullArticleSectionView;
