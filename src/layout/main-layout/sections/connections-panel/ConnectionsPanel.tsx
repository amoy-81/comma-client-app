import { Box, Typography } from "@mui/material";
import Logo from "../../../../assets/svg/logo.svg";
import { useTranslation } from "react-i18next";
import ProfileCard from "./components/profile-card/ProfileCard";

const ConnectionsPanel = () => {
  const { t } = useTranslation();
  return (
    <Box className="xl:col-span-3 col-span-4 hidden md:flex flex-col gap-4">
      {/* Logo */}
      <Box className="sticky top-4 w-full h-10 p-2 pl-3 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl flex items-center gap-1">
        <img src={Logo} className="size-6" />
        <Typography className="!font-extrabold !text-sm text-primary-600">
          {t("comma")}
        </Typography>
        <Typography className="!font-light !text-[10px] text-primary-600/50 truncate">
          {t("commaDiscription")}
        </Typography>
      </Box>

      {/* Board Section  */}
      <Box className="w-full h-[70vh] bg-secondary-900 border border-solid border-secondary-800 rounded-3xl">
        <Typography>Board</Typography>
      </Box>

      {/* Profile Card Section */}
      <ProfileCard />
    </Box>
  );
};

export default ConnectionsPanel;
