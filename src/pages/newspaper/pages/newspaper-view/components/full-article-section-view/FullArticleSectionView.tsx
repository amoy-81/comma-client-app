import { FC } from "react";
import { NewspaperSection } from "../../../../../../api/newspaper/newspaper.type";
import { Box, Typography } from "@mui/material";

const FullArticleSectionView: FC<NewspaperSection> = ({ title, paragraph }) => {
  return (
    <Box>
      <Typography className="!text-xl !font-extrabold">{title[0]}</Typography>
      <Typography className="!text-sm !font-light">{paragraph[0]}</Typography>
    </Box>
  );
};

export default FullArticleSectionView;
