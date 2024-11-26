import { Box, Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useLocation } from "react-router-dom";

const DesktopHeader = () => {
  const location = useLocation();

  // تقسیم مسیر به بخش‌ها
  const pathnames = location.pathname.split("/").filter((x) => x);

  // ایجاد لینک‌های breadcrumb
  const breadcrumbs = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLast = index === pathnames.length - 1;

    return isLast ? (
      <Typography key={to} className="!text-sm !font-semibold">
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </Typography>
    ) : (
      <Link
        key={to}
        to={to}
        style={{ textDecoration: "none", color: "inherit" }}
        className="hover:underline"
      >
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </Link>
    );
  });

  return (
    <Box className="sticky hidden bg-secondary-900/50 top-0 w-full h-12 px-4 md:flex items-center border-b border-solid border-secondary-800 backdrop-blur-sm rounded-t-3xl">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        className="!text-sm "
        aria-label="breadcrumb"
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
          className="hover:underline"
        >
          Home
        </Link>
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};

export default DesktopHeader;
