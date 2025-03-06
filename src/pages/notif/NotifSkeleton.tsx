import { Box, Skeleton } from "@mui/material";

const NotifSkeleton = () => {
  return (
    <Box className="space-y-4">
      {[...Array(5)].map((_, index) => (
        <Box
          key={index}
          className="relative p-4 bg-secondary-900 rounded-xl grid grid-cols-12 gap-4 items-center"
          style={{
            border: "1px solid #1E293B",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Box className="col-span-2 md:col-span-1">
            <Skeleton
              variant="circular"
              className="!w-12 !h-12 !bg-secondary-600"
            />
          </Box>

          <Box className="col-span-8 md:col-span-9 ml-4">
            <Skeleton variant="text" className="!w-36 h-6 !bg-secondary-600" />
            <Skeleton
              variant="text"
              className="!w-28 h-5 !bg-secondary-600 mt-2"
            />
            <Skeleton
              variant="text"
              className="!w-1/2 h-5 !bg-secondary-600 mt-3"
            />
          </Box>

          <Box className="col-span-2 flex flex-col items-end">
            <Skeleton
              variant="text"
              className="!w-24 !h-3 !bg-secondary-600 mb-2"
            />
            <Skeleton
              variant="rectangular"
              className="!w-24 h-8 !bg-secondary-600 rounded-sm"
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default NotifSkeleton;
