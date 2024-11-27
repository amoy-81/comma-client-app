import { Box, Skeleton } from "@mui/material";

const UserRowSkeleton = () => {
  return (
    <Box className="flex items-center w-full gap-2">
      <Box className="flex items-center gap-2 w-full">
        <Skeleton
          variant="circular"
          className="size-10 !h-10 rounded-full !bg-secondary-600"
        />
        <Skeleton className="w-1/2 !h-6 rounded-full !bg-secondary-600" />
      </Box>
      <Skeleton className="w-24 !h-12 rounded-full !bg-secondary-600" />
    </Box>
  );
};

export default UserRowSkeleton;
