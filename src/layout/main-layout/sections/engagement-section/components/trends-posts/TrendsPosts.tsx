import { Box, Button } from "@mui/material";
import { useGetRandomPosts } from "../../../../../../api/post/post.querys";
import PreviewPost from "../preview-post/PreviewPost";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import PostSkeleton from "../preview-post/PreviewPostSkeleton";

const TrendsPosts = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const skeletonArray = Array.from({ length: 4 });

  const { getRandomPostsData, getRandomPostsLoading } = useGetRandomPosts({
    page: 1,
    pageSize: 4,
  });

  const handleNavigateSearch = () => {
    navigate("/search?mode=posts");
  };

  return (
    <Box className="!w-full !h-[400px] p-4 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl flex flex-col gap-4 overflow-hidden relative">
      {getRandomPostsLoading &&
        skeletonArray.map((_, index) => <PostSkeleton key={index} />)}

      {getRandomPostsData?.map((post) => (
        <PreviewPost
          key={post.id}
          {...{
            ...post,
            ...post.user,
            id: post.id,
            userId: post.user.id,
          }}
        />
      ))}

      <Box className="w-full h-16 bg-gradient-to-t from-secondary-900 to-transparent absolute bottom-0 left-0 flex justify-center items-center">
        <Button
          className="!font-medium !text-sm text-primary-600 cursor-pointer !bg-secondary-800/20 !backdrop-blur-sm"
          onClick={handleNavigateSearch}
        >
          {t("viewMore")}
        </Button>
      </Box>
    </Box>
  );
};

export default TrendsPosts;
