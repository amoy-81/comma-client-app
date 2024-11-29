import { Box } from "@mui/material";
import { useUserGetPosts } from "../../../../api/post/post.querys";
import Post from "../../../../components/post/Post";
import PostSkeleton from "../../../../components/post/PostSkeleton";
import useInfiniteScroll from "../../../../hooks/use-infinite-scroll.hook";
import { useEffect, useState } from "react";

const RelatedPosts = () => {
  const skeletonArray = Array.from({ length: 4 });

  const [pageNumber, setPageNumber] = useState(1);

  const { getPostsData, getPostsLoading } = useUserGetPosts({
    page: pageNumber,
    pageSize: 4,
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

export default RelatedPosts;
