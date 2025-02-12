import { Box, Skeleton } from "@mui/material";

const PreviewPostSkeleton = () => {
  return (
    <Box className="">
      <Box className="flex gap-2 items-center cursor-pointer">
        <Skeleton variant="circular" className="!bg-secondary-600 !size-10" />
        <Skeleton variant="text" className="!bg-secondary-600 w-20" />
      </Box>
      <Box className="mt-1">
        <Skeleton variant="text" className="!bg-secondary-600 w-1/2" />
        <Skeleton variant="text" className="!bg-secondary-600 w-1/3" />
      </Box>

      <Box className="flex gap-8 p-2 justify-end">
        <Skeleton variant="rounded" className="!bg-secondary-600 w-6" />
      </Box>

      <Box
        component={"hr"}
        className="border-secondary-500/10 border-dashed border-spacing-5 mt-2"
      />
    </Box>
  );
};

export default PreviewPostSkeleton;
