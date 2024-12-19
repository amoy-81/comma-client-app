import CreateBoard from "../board/sections/create-board/CreateBoard";
import ShowBoard from "../board/sections/show-board/ShowBoard";
import { Box, } from "@mui/material";

const BoardPage: React.FC = () => {

  return (
    <Box className="p-4">
   
      <CreateBoard />
      <ShowBoard />
    </Box>
  );
};

export default BoardPage;
