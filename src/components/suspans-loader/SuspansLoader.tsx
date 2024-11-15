import { Box, CircularProgress, Typography } from "@mui/material";

const SuspansLoader = () => {
  return (
    <Box className="w-full h-screen flex flex-col justify-center items-center gap-2">
      <CircularProgress />
      <Typography className="text-secondary-200">Please Wait</Typography>
    </Box>
  );
};

export default SuspansLoader;
