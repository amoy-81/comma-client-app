import { FC, useEffect } from "react";
import PostSkeleton from "../../../../components/post/PostSkeleton";
import { Typography } from "@mui/material";
import Post from "../../../../components/post/Post";
import { useSearchPost } from "../../../../api/post/post.querys";
import { t } from "i18next";

interface SearchPostsProps {
  searchValue: string;
}

const SearchPosts: FC<SearchPostsProps> = ({ searchValue }) => {
  const skeletonArray = Array.from({ length: 4 });

  const { searchPostData, searchPostMutate, searchPostIsPending } =
    useSearchPost();

  useEffect(() => {
    if (searchValue) {
      searchPostMutate({ text: searchValue, page: 1, pageSize: 10 });
    }
  }, [searchValue]);

  return (
    <>
      {!!searchPostData &&
        searchPostData?.map((post) => <Post key={post.id} {...post} />)}

      {searchPostIsPending &&
        skeletonArray.map((_, index) => <PostSkeleton key={index} />)}

      <Typography className="!my-8 text-primary-800/50 !text-sm text-center">
        {t("searchValueEmpty")}
      </Typography>
    </>
  );
};

export default SearchPosts;
