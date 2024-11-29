import { useUserGetPosts } from "../../../../api/post/post.querys";
import Post from "../../../../components/post/Post";
import PostSkeleton from "../../../../components/post/PostSkeleton";

const RelatedPosts = () => {
  const skeletonArray = Array.from({ length: 4 });

  const { getPostsData, getPostsLoading } = useUserGetPosts({
    page: 1,
    limit: 10,
  });
  return (
    <>
      {getPostsLoading &&
        skeletonArray.map((_, index) => <PostSkeleton key={index} />)}

      {getPostsData &&
        getPostsData?.map((post) => <Post key={post.id} {...post} />)}
    </>
  );
};

export default RelatedPosts;
