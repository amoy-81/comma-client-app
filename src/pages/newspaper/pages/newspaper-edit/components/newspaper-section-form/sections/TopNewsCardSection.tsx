import { FC } from "react";
import { SectionFileProps } from "../@types/newspaper-section-form.type";
import { Box } from "@mui/material";
import FullArticleSection from "./FullArticleSection";
import HeaderBannerSection from "./HeaderBannerSection";

const TopNewsCardSection: FC<SectionFileProps> = (props) => {
  return (
    <Box className="flex items-center gap-4">
      <Box className="w-2/3">
        <FullArticleSection />
      </Box>
      <Box className="w-1/3">
        <HeaderBannerSection {...props} />
      </Box>
    </Box>
  );
};

export default TopNewsCardSection;
