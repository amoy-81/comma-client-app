import { Box, Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { mergeClasses } from "../../../utils/merge-classess.util";
import useLanguageStore from "../../../store/lang/lang.store";

const DesktopHeader = () => {
  const { lang } = useLanguageStore();
  const { t } = useTranslation();
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbs = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLast = index === pathnames.length - 1;

    return isLast ? (
      <Typography key={to} className="!text-sm !font-semibold">
        {t((value.charAt(0).toUpperCase() + value.slice(1)).toLowerCase())}
      </Typography>
    ) : (
      <Link
        key={to}
        to={to}
        style={{ textDecoration: "none", color: "inherit" }}
        className="hover:underline"
      >
        {t((value.charAt(0).toUpperCase() + value.slice(1)).toLowerCase())}
      </Link>
    );
  });

  return (
    <Box className="sticky z-40 hidden bg-secondary-900/50 top-0 w-full h-12 px-4 md:flex items-center border-b border-solid border-secondary-800 backdrop-blur-sm rounded-t-3xl">
      <Breadcrumbs
        separator={
          <NavigateNextIcon className={mergeClasses(lang === 'fa' && 'rotate-180')} fontSize="small" />
        }
        className="!text-sm "
        aria-label="breadcrumb"
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
          className="hover:underline"
        >
          {t("home")}
        </Link>
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};

export default DesktopHeader;
