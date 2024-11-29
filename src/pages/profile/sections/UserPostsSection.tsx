import { useEffect, useState } from "react";
import { useUserGetPosts } from "../../../api/post/post.querys";
import useInfiniteScroll from "../../../hooks/use-infinite-scroll.hook";
import { Box } from "@mui/material";
import PostSkeleton from "../../../components/post/PostSkeleton";
import useAuth from "../../../hooks/use-auth.hook";
import { useSearchParams } from "react-router-dom";
import Post from "../../../components/post/Post";

const UserPostsSection = () => {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();

  const userId = searchParams.get("user");

  const skeletonArray = Array.from({ length: 4 });

  const [pageNumber, setPageNumber] = useState(1);

  const { getPostsData, getPostsLoading } = useUserGetPosts({
    page: pageNumber,
    pageSize: 4,
    userId: parseInt(userId || "") || (user?.id as number),
  });

  const { setLastItem, data, page } = useInfiniteScroll(getPostsData);

  useEffect(() => {
    setPageNumber(page);
  }, [page]);

  return (
    <>
      {!!data.length &&
        data?.map((post) => (
          <Box key={post.id} ref={setLastItem}>
            <Post {...post} />
          </Box>
        ))}

      {getPostsLoading &&
        skeletonArray.map((_, index) => <PostSkeleton key={index} />)}
    </>
  );
};

export default UserPostsSection;
