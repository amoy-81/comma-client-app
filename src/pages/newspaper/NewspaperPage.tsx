import { Box, Button, Skeleton, Typography } from "@mui/material";
import {
  useCreateNewsPaper,
  useGetTodayNewsPapers,
} from "../../api/newspaper/newspaper.querys";
import NewsPaperCard from "./components/newspaper-card/NewsPaperCard";
import { mergeClasses } from "../../utils/merge-classess.util";
import { t } from "i18next";
import { useEffect, useState } from "react";
import useInfiniteScroll from "../../hooks/use-infinite-scroll.hook";
import EmptyIlust from "../../assets/svg/empty.svg";
import { useNavigate } from "react-router-dom";

const NewspaperPage = () => {
  const navigate = useNavigate();
  const skeletonArray = Array.from({ length: 4 });
  const [pageNumber, setPageNumber] = useState(1);

  const { getTodayNewsPapersData, getTodayNewsPapersLoading } =
    useGetTodayNewsPapers({ page: pageNumber, pageSize: 20 });

  const { createNewsPaperMutate, createNewsPaperIsPending } =
    useCreateNewsPaper();

  const { setLastItem, data, page } = useInfiniteScroll(
    getTodayNewsPapersData?.data
  );

  useEffect(() => {
    setPageNumber(page);
  }, [page]);

  const handleWritingNewspaper = () => {
    createNewsPaperMutate(undefined, {
      onSuccess: (res) => {
        navigate(`/newspaper/edit?newspaperId=${res.news_paper_id}`);
      },
    });
  };

  return (
    <>
      {/* card section */}
      <Box className="grid grid-cols-12">
        {!!data.length &&
          data.map((newspaper, index) =>
            index === 0 ? (
              <Box
                key={newspaper.id}
                className="lg:col-span-6 col-span-12 p-2 h-[430px] flex flex-col gap-4 "
              >
                <Button
                  variant="contained"
                  className="w-full !rounded-3xl truncate px-4"
                  disabled={createNewsPaperIsPending}
                  onClick={handleWritingNewspaper}
                >
                  {createNewsPaperIsPending
                    ? t("pleaseWait")
                    : t("Writing my newspaper")}
                </Button>
                <NewsPaperCard {...newspaper} />
              </Box>
            ) : (
              <Box
                key={newspaper.id}
                className={mergeClasses(
                  "lg:col-span-6 col-span-12 p-2 h-96",
                  index % 2 !== 0 && index !== 1 && "lg:-translate-y-12"
                )}
                ref={setLastItem}
              >
                <NewsPaperCard {...newspaper} />
              </Box>
            )
          )}
      </Box>

      {/* loading section */}
      {getTodayNewsPapersLoading && (
        <Box className="grid grid-cols-12">
          {skeletonArray.map((_, index) =>
            index === 0 ? (
              <Box
                key={index}
                className="lg:col-span-6 col-span-12 p-2 h-[430px] flex flex-col "
              >
                <Skeleton
                  variant="rounded"
                  className="!w-full !h-full !rounded-3xl !bg-secondary-600"
                />
              </Box>
            ) : (
              <Box
                key={index}
                className={mergeClasses(
                  "lg:col-span-6 col-span-12 p-2 h-96",
                  index % 2 !== 0 && index !== 1 && "lg:-translate-y-12"
                )}
              >
                <Skeleton
                  variant="rounded"
                  className="!w-full !h-full !rounded-3xl !bg-secondary-600"
                />
              </Box>
            )
          )}
        </Box>
      )}

      {data.length === 0 && (
        <Box className="flex flex-col items-center mt-10">
          <img src={EmptyIlust} className="h-48" />
          <Typography className="!text-sm !font-semibold max-w-80 text-center text-secondary-100">
            {t("newspaper is empty")}
          </Typography>
          <Button
            variant="contained"
            className="!rounded-3xl truncate !px-4 !mt-8"
            disabled={createNewsPaperIsPending}
            onClick={handleWritingNewspaper}
          >
            {createNewsPaperIsPending
              ? t("pleaseWait")
              : t("Writing my newspaper")}
          </Button>
        </Box>
      )}
    </>
  );
};

export default NewspaperPage;
