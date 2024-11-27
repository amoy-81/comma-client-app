import { Box, Skeleton } from "@mui/material";

const InfoSkeleton = () => {
  return (
    <Box className="flex flex-col items-center mt-2">
      <Skeleton variant="text" className="!w-16 h-2 !bg-secondary-600" />
      <Skeleton variant="text" className="!w-20 !h-4 !bg-secondary-600" />

      <Skeleton variant="text" className="!w-1/2 !mt-4 h-2 !bg-secondary-600" />
      <Skeleton variant="text" className="!w-1/3 h-2 !bg-secondary-600" />
    </Box>
  );
};

export default InfoSkeleton;
