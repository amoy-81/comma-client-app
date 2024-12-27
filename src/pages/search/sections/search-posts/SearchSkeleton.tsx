import { Box, Skeleton } from "@mui/material";

export const TopPostSkeleton = () => {
  return (
    <Box className="top-post-skeleton rounded-xl p-6 shadow-lg relative overflow-hidden col-span-1 row-span-2">
      <Skeleton variant="rectangular" className="absolute inset-0 opacity-25 rounded-xl !h-full !w-full" />
      <Box className="relative flex flex-col items-center text-center h-full justify-center">
        <Skeleton variant="circular" className="w-12 h-12 !bg-secondary-600" />
        <Skeleton variant="text" className="!w-1/2 h-6 mt-4 !bg-secondary-600" />
        <Skeleton variant="text" className="!w-1/3 h-4 mt-2 !bg-secondary-600" />
        <Skeleton variant="text" className="!w-1/4 h-4 mt-4 !bg-secondary-600" />
        <Skeleton variant="rectangular" className="!w-full h-16 mt-6 !bg-secondary-600 rounded-md" />
      </Box>
    </Box>
  );
};

export const PostCardSkeleton = () => {
  return (
    <Box className="post-card-skeleton rounded-xl p-4 shadow-lg relative overflow-hidden w-80/2 h-36">
      <Skeleton variant="rectangular" className="absolute inset-0 opacity-20 rounded-xl !h-full !w-full" />
      <Box className="relative flex items-start space-x-4">
        <Skeleton variant="circular" className="w-10 h-10 !bg-secondary-600" />
        <Box className="flex flex-col space-y-1 w-full">
          <Skeleton variant="text" className="!w-3/4 h-4 !bg-secondary-600" />
          <Skeleton variant="text" className="!w-1/2 h-3 !bg-secondary-600" />
        </Box>
      </Box>
    </Box>
  );
};
