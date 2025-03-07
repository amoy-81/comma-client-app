import { Box, Skeleton } from "@mui/material";

const CommentSkeleton = () => {
  return (
    <Box className="p-2 bg-secondary-800 rounded-lg">
      <Box className="flex gap-2 p-2 items-center cursor-pointer">
        <Skeleton variant="circular" className="!bg-secondary-600 !size-11" />
        <Skeleton variant="text" className="!bg-secondary-600 w-20" />
        <Skeleton variant="text" className="!bg-secondary-600 w-16 !h-4" />
      </Box>
      <Box className="p-2">
        <Skeleton variant="text" className="!bg-secondary-600 w-1/2" />
        <Skeleton variant="text" className="!bg-secondary-600 w-1/3" />
        <Skeleton variant="text" className="!bg-secondary-600 w-1/4" />
      </Box>

      <Box className="flex gap-8 p-2 justify-center">
        <Skeleton variant="rounded" className="!bg-secondary-600 w-6" />
      </Box>
    </Box>
  );
};

export default CommentSkeleton;
