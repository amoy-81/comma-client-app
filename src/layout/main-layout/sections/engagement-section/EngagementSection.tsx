import { Box, Typography } from "@mui/material";
import ShortSearchUser from "./components/ShortSearchUser";

const EngagementSection = () => {
  return (
    <Box className="col-span-3 hidden xl:flex flex-col gap-4">
      <ShortSearchUser />

      <Box className="w-full h-full p-2 pl-3 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl flex items-center gap-1">
        <Typography className="!font-light !text-[10px] text-primary-600/50">
          Trends
        </Typography>
      </Box>
    </Box>
  );
};

export default EngagementSection;
