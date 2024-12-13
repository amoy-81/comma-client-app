import { Avatar, Box, Typography } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { FC } from "react";
import { PreviewPostProps } from "./@types/preview-post.type";
import { useNavigate } from "react-router-dom";
import { detectDirection } from "../../../../../../utils/detect-direction.util";

const PreviewPost: FC<PreviewPostProps> = ({
  id,
  avatar,
  name,
  text_content,
  userId,
}) => {
  const navigate = useNavigate();

  const handleNavigatePost = () => {
    navigate(`/post?postId=${id}`);
  };

  const handleNavigateProfile = () => {
    navigate(`/profile?user=${userId}`);
  };

  return (
    <Box>
      <Box className="!flex items-center gap-2">
        <Avatar
          src={avatar || ""}
          className="size-10 !text-primary-600 !bg-secondary-600 cursor-pointer"
          onClick={handleNavigateProfile}
        />
        <Typography className="!text-sm !font-normal">{name}</Typography>
      </Box>
      <Typography
        dir={detectDirection(text_content)}
        className="!text-xs !font-light !mt-2"
      >
        {text_content}
      </Typography>
      <Box className="!w-full flex justify-end mt-2">
        <OpenInFullIcon
          onClick={handleNavigatePost}
          className="text-secondary-500 hover:text-primary-600 cursor-pointer"
        />
      </Box>
      <Box
        component={"hr"}
        className="border border-dashed border-secondary-400/25 mt-2"
      />
    </Box>
  );
};

export default PreviewPost;
