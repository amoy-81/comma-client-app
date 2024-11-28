import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import MobileHeader from "../../header/MobileHeader";
import Navbar from "../../navbar/Navbar";
import DesktopHeader from "../../header/DesktopHeader";

const MainSection = () => {
  return (
    <Box className="md:bg-secondary-900 md:border border-solid border-secondary-800 xl:col-span-6 md:col-span-8 col-span-12 rounded-3xl">
      <DesktopHeader />
      <MobileHeader />
      <Box className="p-4">
        <Outlet />
      </Box>
      <Navbar />
    </Box>
  );
};

export default MainSection;
