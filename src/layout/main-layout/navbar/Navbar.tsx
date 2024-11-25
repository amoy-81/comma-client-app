import {
  Mode,
  Newspaper,
  PostAdd,
  Search,
  SupervisorAccount,
} from "@mui/icons-material";
import { Box } from "@mui/material";

const Navbar = () => {
  return (
    <Box className="w-full sticky bottom-4 flex justify-center items-center">
      <Box className="w-80 h-11 p-2 px-4 bg-secondary-600/50 backdrop-blur-sm border border-solid text-primary-700 border-primary-700 rounded-3xl flex items-center justify-between gap-1">
        <Newspaper />
        <SupervisorAccount />
        <Box className="text-primary-600 bg-secondary-600 border border-solid border-primary-600 rounded-full p-1">
          <Mode />
        </Box>
        <Search />
        <PostAdd />
      </Box>
    </Box>
  );
};

export default Navbar;
