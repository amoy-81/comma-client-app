import { Box } from "@mui/material";
import ShortSearchUser from "./components/ShortSearchUser";
import TrendsPosts from "./components/trends-posts/TrendsPosts";

const EngagementSection = () => {
  return (
    <Box className="col-span-3 hidden xl:flex flex-col gap-4">
      {/* Search Section */}
      <ShortSearchUser />
      {/* Posts Section */}
      <TrendsPosts />
    </Box>
  );
};

export default EngagementSection;
