import { FC, useEffect } from "react";
import { Typography } from "@mui/material";
import { useSearchPost, useGetRandomPosts } from "../../../../api/post/post.querys";
import PostCard from "../search-posts/Postcard";
import TopPost from "../search-posts/TopPost";
import { TopPostSkeleton, PostCardSkeleton } from "../search-posts/SearchSkeleton";
import { t } from "i18next";

interface SearchPostsProps {
  searchValue: string;
}

const SearchPosts: FC<SearchPostsProps> = ({ searchValue }) => {
  const { searchPostData, searchPostMutate, searchPostIsPending } = useSearchPost();
  const { getRandomPostsData, getRandomPostsLoading } = useGetRandomPosts({ page: 1, pageSize: 11 });

  useEffect(() => {
    if (searchValue) {
      searchPostMutate({ text: searchValue, page: 1, pageSize: 11 });
    }
  }, [searchValue, searchPostMutate]);

  return (
    <div className="search-posts-container grid grid-cols-2 gap-4 p-4">
      {!searchValue && getRandomPostsLoading && <TopPostSkeleton />}

      {!searchValue && !getRandomPostsLoading && getRandomPostsData?.length > 0 && (
        <TopPost
          key={getRandomPostsData[0].id}
          author={getRandomPostsData[0].user.name}
          email={getRandomPostsData[0].user.email}
          description={getRandomPostsData[0].text_content}
          userAvatarUrl={getRandomPostsData[0].user.avatar || "https://via.placeholder.com/150"}
          backgroundImageUrl={getRandomPostsData[0].image_content}
          postId={getRandomPostsData[0].id.toString()} 
          userId={getRandomPostsData[0].user.id.toString()} 
        />
      )}

      {!searchValue && getRandomPostsLoading &&
        Array(5).fill(null).map((_, idx) => <PostCardSkeleton key={idx} />)}

      {!searchValue &&
        !getRandomPostsLoading &&
        getRandomPostsData?.slice(1).map((post) => (
          <PostCard
            key={post.id}
            description={post.text_content}
            author={post.user.name}
            userAvatarUrl={post.user.avatar || "https://via.placeholder.com/150"}
            postImageUrl={post.image_content}
            postId={post.id.toString()} 
            userId={post.user.id.toString()} 
          />
        ))}

      {searchValue && searchPostIsPending &&
        Array(5).fill(null).map((_, idx) => <PostCardSkeleton key={idx} />)}

      {searchValue &&
        searchPostData?.map((post) => (
          <PostCard
            key={post.id}
            description={post.text_content}
            author={post.user.name}
            userAvatarUrl={post.user.avatar || "https://via.placeholder.com/150"}
            postImageUrl={post.image_content}
            userId={post.user.id.toString()} 
            postId={post.id.toString()} 
          />
        ))}

      {searchValue && searchPostData?.length === 0 && (
        <Typography className="col-span-2 text-center text-primary-800/50 !text-sm">
          {t("No posts found for your search.")}
        </Typography>
      )}
    </div>
  );
};

export default SearchPosts;
