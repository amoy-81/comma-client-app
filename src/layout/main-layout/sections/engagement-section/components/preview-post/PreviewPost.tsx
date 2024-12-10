import { Avatar, Box, Typography } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { FC } from "react";
import { PreviewPostProps } from "./@types/preview-post.type";

const PreviewPost: FC<PreviewPostProps> = ({ avatar, name, text_content }) => {
  return (
    <Box>
      <Box className="!flex items-center gap-2">
        <Avatar
          src={avatar || ""}
          className="size-10 !text-primary-600 !bg-secondary-600"
        />
        <Typography className="!text-sm !font-normal">{name}</Typography>
      </Box>
      <Typography className="!text-xs !font-light !mt-2">
        {text_content}
      </Typography>
      <Box className="!w-full flex justify-end">
        <OpenInFullIcon className="text-secondary-500" />
      </Box>
      <Box
        component={"hr"}
        className="border border-dashed border-secondary-400/25 mt-2"
      />
    </Box>
  );
};

export default PreviewPost;
