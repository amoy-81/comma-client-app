import { Box, Button, Typography } from "@mui/material";
import useAuth from "../../hooks/use-auth.hook";
import { useUserGetPosts } from "../../api/post/post.querys";
import { useState } from "react";

const PostsPage = () => {
  const { logout } = useAuth();

  const [state, setState] = useState({ userId: 2, page: 1, limit: 3 });

  const { getPostsData, getPostsLoading } = useUserGetPosts(state);

  console.log(getPostsData, getPostsLoading);
  return (
    <Box className="h-screen p-4 flex flex-col justify-center items-center gap-4">
      <Typography>You are login👏👏😜</Typography>

      <Button variant="contained" onClick={logout}>
        Logout
      </Button>

      <Button
        variant="contained"
        onClick={() => setState((prev) => ({ ...prev, page: prev.page - 1 }))}
      >
        last PAGE
      </Button>
      <Button
        variant="contained"
        onClick={() => setState((prev) => ({ ...prev, page: prev.page + 1 }))}
      >
        NEXT PAGE
      </Button>
    </Box>
  );
};

export default PostsPage;
