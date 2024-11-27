import { ArrowBack } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import Logo from "@/assets/svg/logo.svg";
import { useTranslation } from "react-i18next";

const MobileHeader = () => {
  const { t } = useTranslation();
  return (
    <Box className="sticky top-4 w-full h-10 p-2 pl-3 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl hidden max-md:flex items-center justify-between gap-1">
      <Box>
        <ArrowBack className="text-primary-600" />
      </Box>
      <Box className="flex items-center gap-1">
        <img src={Logo} className="size-6" />
        <Typography className="!font-extrabold !text-sm text-primary-600">
          {t("comma")}
        </Typography>
      </Box>
      <Box className="">
        <Avatar className="!size-8  !text-primary-600 !bg-secondary-600" />
      </Box>
    </Box>
  );
};

export default MobileHeader;
