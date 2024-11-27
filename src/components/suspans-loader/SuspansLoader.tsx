import { Box, CircularProgress, Typography } from "@mui/material";
import { t } from "i18next";

const SuspansLoader = () => {
  return (
    <Box className="w-full h-screen flex flex-col justify-center items-center gap-2">
      <CircularProgress />
      <Typography className="text-secondary-200">{t("pleaseWait")}</Typography>
    </Box>
  );
};

export default SuspansLoader;
