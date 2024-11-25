import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import MobileHeader from "../../header/MobileHeader";
import Navbar from "../../navbar/Navbar";

const MainSection = () => {
  return (
    <Box className="md:bg-secondary-900 md:border border-solid border-secondary-800 xl:col-span-6 md:col-span-8 col-span-12 rounded-3xl ">
      <MobileHeader />
      <Outlet />
      <Navbar />
    </Box>
  );
};

export default MainSection;
