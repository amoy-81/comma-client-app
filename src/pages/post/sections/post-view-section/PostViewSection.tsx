import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetOnePosts } from "../../../../api/post/post.querys";
import PostSkeleton from "../../../../components/post/PostSkeleton";
import Post from "../../../../components/post/Post";

const PostViewSection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const postId = searchParams.get("postId");

  useEffect(() => {
    !postId && navigate("/");
  }, []);

  const { getOnePostsData } = useGetOnePosts(parseInt(postId || "") || 0);

  return (
    <>{getOnePostsData ? <Post {...getOnePostsData} /> : <PostSkeleton />}</>
  );
};

export default PostViewSection;
