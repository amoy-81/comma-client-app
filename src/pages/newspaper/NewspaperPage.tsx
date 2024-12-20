import { Box, Button } from "@mui/material";
import { useGetTodayNewsPapers } from "../../api/newspaper/newspaper.querys";
import NewsPaperCard from "./components/newspaper-card/NewsPaperCard";
import { mergeClasses } from "../../utils/merge-classess.util";
import { t } from "i18next";

const NewspaperPage = () => {
  const { getTodayNewsPapersData, getTodayNewsPapersLoading } =
    useGetTodayNewsPapers({ page: 1, pageSize: 20 });
  return (
    <>
      <Box className="grid grid-cols-12">
        {getTodayNewsPapersData?.data.map((newspaper, index) =>
          index === 0 ? (
            <Box
              key={newspaper.id}
              className="lg:col-span-6 col-span-12 p-2 h-[430px] flex flex-col gap-4 "
            >
              <Button
                variant="contained"
                className="w-full !rounded-3xl truncate px-4"
              >
                {t("Writing my newspaper")}
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
            >
              <NewsPaperCard {...newspaper} />
            </Box>
          )
        )}
      </Box>
    </>
  );
};

export default NewspaperPage;
