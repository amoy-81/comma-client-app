import { Search } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const EngagementSection = () => {
  return (
    <Box className="col-span-3 hidden xl:flex flex-col gap-4">
      <Box className="w-full h-10 p-2 pl-3 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl flex items-center gap-1">
        <Search className="text-primary-600" />
        <Typography className="!font-light !text-[10px] text-primary-600/50">
          Search among users...
        </Typography>
      </Box>

      <Box className="w-full h-48 p-2 pl-3 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl flex items-center gap-1">
        <Typography className="!font-light !text-[10px] text-primary-600/50">
          Search Result
        </Typography>
      </Box>

      <Box className="w-full h-full p-2 pl-3 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl flex items-center gap-1">
        <Typography className="!font-light !text-[10px] text-primary-600/50">
          Trends
        </Typography>
      </Box>
    </Box>
  );
};

export default EngagementSection;
