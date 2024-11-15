import { Box, Button, Typography } from "@mui/material";
import useAuth from "../../hooks/use-auth.hook";

const PostsPage = () => {
  const { logout } = useAuth();
  return (
    <Box className="h-screen p-4 flex flex-col justify-center items-center gap-4">
      <Typography>You are login👏👏😜</Typography>
      <Button variant="contained" onClick={logout}>
        Logout
      </Button>
    </Box>
  );
};

export default PostsPage;
