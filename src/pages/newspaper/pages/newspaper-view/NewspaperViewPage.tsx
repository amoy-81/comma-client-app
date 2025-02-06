import { Box, Container, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useGetOneNewsPaper } from "../../../../api/newspaper/newspaper.querys";
import { renderNewspaperSection } from "./helper/render-newspapers-section.helper";
import { t } from "i18next";

const NewspaperViewPage = () => {
  const [searchParams] = useSearchParams();

  const newspaperId = searchParams.get("newspaperId");
  const id = parseInt(newspaperId || "");

  const { getOneNewsPapersData, getOneNewsPapersIsPending } =
    useGetOneNewsPaper(id);

  return (
    <Container maxWidth="md" className="flex flex-col gap-8">
      <Box>
        <Typography className="flex gap-1 !text-2xl">
          <Box component={"span"} className="text-primary-600 font-extrabold">
            {t("comma")}
          </Box>
          {t("news")}
        </Typography>
      </Box>

      {getOneNewsPapersData?.sections.map((section) => (
        <>{renderNewspaperSection(section.type, section)}</>
      ))}
    </Container>
  );
};

export default NewspaperViewPage;
