import { Box, Button, Avatar, Typography, Divider } from "@mui/material";
import { useGetBoard } from "../../../../../api/board/board.querys";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CommentBoard = () => {
  const { t } = useTranslation();
  const { getBoardData, getBoardLoading } = useGetBoard({ page: 1, pageSize: 10 });
  const navigate = useNavigate();

  const handleNavigateBoard = () => {
    navigate("/board");
  };

  const skeletonArray = Array.from({ length: 4 });

  return (
    <Box
      className="!w-full !h-[400px] p-4 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl flex flex-col gap-4 overflow-hidden relative"
    >
      {getBoardLoading &&
        skeletonArray.map((_, index) => (
          <Box
            key={index}
            className="w-full h-[60px] bg-secondary-800 rounded-xl animate-pulse"
          />
        ))}

      {getBoardData?.map((item, index) => (
        <Box key={item.id} className="flex flex-col gap-2">
          <Box className="flex items-center gap-4">
            <Avatar
              src={item.user?.avatar || ""}
              alt={item.user?.name || "User"}
              className="w-10 h-10"
            />
            <Typography className="text-white font-medium">
              {item.user?.name || "Unknown User"}
            </Typography>
          </Box>
          <Typography className="text-gray-400 text-sm">{item.text}</Typography>
          
          {index < getBoardData.length - 1 && (
            <Divider className="border-white my-4" />
          )}
        </Box>
      ))}

      <Box className="w-full h-16 bg-gradient-to-t from-secondary-900 to-transparent absolute bottom-0 left-0 flex justify-center items-center">
        <Button
          className="!font-medium !text-sm text-primary-600 cursor-pointer !bg-secondary-800/20 !backdrop-blur-sm"
          onClick={handleNavigateBoard}
        >
          {t("viewMore")}
        </Button>
      </Box>
    </Box>
  );
};

export default CommentBoard;
