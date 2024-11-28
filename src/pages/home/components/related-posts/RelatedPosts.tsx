import { useUserGetPosts } from "../../../../api/post/post.querys";
import Post from "../../../../components/post/Post";

const RelatedPosts = () => {
  const { getPostsData } = useUserGetPosts({
    page: 1,
    limit: 10,
  });
  return (
    <>
      {getPostsData?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
};

export default RelatedPosts;
