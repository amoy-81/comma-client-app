import { Box, Container, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useGetOneNewsPaper } from "../../../../api/newspaper/newspaper.querys";
import { renderNewspaperSection } from "./helper/render-newspapers-section.helper";
import { t } from "i18next";
import { formatDate } from "../../../../utils/format-date.util";
import { UserRoles } from "../../../../api/user/user.type";
import VerifiedIcon from "@mui/icons-material/Verified";
import SuspansLoader from "../../../../components/suspans-loader/SuspansLoader";

const NewspaperViewPage = () => {
  const [searchParams] = useSearchParams();

  const newspaperId = searchParams.get("newspaperId");
  const id = parseInt(newspaperId || "");

  const { getOneNewsPapersData, getOneNewsPapersIsPending } =
    useGetOneNewsPaper(id);

  if (getOneNewsPapersIsPending) return <SuspansLoader />;

  const sectionsList = getOneNewsPapersData?.sections.sort(
    (a, b) => b.order - a.order
  );

  return (
    <Container maxWidth="md" className="flex flex-col gap-8">
      {/* Header */}
      <Box className="mt-8">
        <Box>
          <Typography className="flex gap-1 !text-2xl">
            <Box component={"span"} className="text-primary-600 font-extrabold">
              {t("comma")}
            </Box>
            {t("news")}
          </Typography>

          <Typography className="!text-sm">
            {formatDate(getOneNewsPapersData?.createdAt || "")}
          </Typography>
        </Box>
      </Box>

      {/* Sections */}
      {sectionsList?.map((section) => (
        <>{renderNewspaperSection(section.type, section)}</>
      ))}

      {/* Footer - user details */}
      <Box className="mt-8 border-t border-solid border-secondary-500/30 p-4">
        <Box className="flex flex-col items-center">
          <Box className="flex justify-center gap-1 items-center">
            <Typography className="!text-sm">
              {getOneNewsPapersData?.user.name}
            </Typography>
            {getOneNewsPapersData?.user.role === UserRoles.VERIFYED_USER && (
              <VerifiedIcon className="text-primary-600 !size-4" />
            )}
          </Box>
          <Typography className=" text-primary-600 !text-xs">
            {getOneNewsPapersData?.user.email}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default NewspaperViewPage;
