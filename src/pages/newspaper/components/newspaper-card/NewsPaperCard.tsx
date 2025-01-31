import { FC, useState } from "react";
import { NewsPaperCardProps } from "./@types/newspaper-card.type";
import { Avatar, Box, Typography } from "@mui/material";
import { t } from "i18next";
import { FileDownload, RemoveRedEye, Verified } from "@mui/icons-material";
import { AppConfig } from "../../../../configs/app/app.config";
import { detectDirection } from "../../../../utils/detect-direction.util";
import { UserRoles } from "../../../../api/user/user.type";

const NewsPaperCard: FC<NewsPaperCardProps> = ({
  user,
  title,
  description,
  poster,
  views,
}) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <Box className="relative h-full rounded-3xl overflow-hidden bg-secondary-600 hover:-translate-y-1 transition border-0 hover:border-[1px] border-solid border-primary-600 shadow ">
      {!imageIsLoaded && (
        <Box className="w-full h-full absolute top-0 left-0 z-[3] flash-effect" />
      )}

      <img
        className="absolute top-0 left-0 z-[5] w-full h-full"
        src={`${AppConfig.baseURL}${poster.imageUrl}`}
        onLoad={() => setImageIsLoaded(true)}
      />

      <Box className="w-full h-full absolute top-0 left-0 z-[6] bg-black/50" />

      <Box className="flex flex-col justify-between p-4 w-full h-full absolute top-0 left-0 z-[7] cursor-pointer transition backdrop-blur-[2px] hover:backdrop-blur-[1px] hover:bg-secondary-600/25">
        <Box dir={detectDirection(user.name)}>
          <Avatar
            className="size-11  !text-primary-600 !bg-secondary-600"
            dir={detectDirection(user.name)}
            src={user.avatar || ""}
          />
          <Box className="flex items-center gap-1">
            <Typography
              dir={detectDirection(user.name)}
              className="w-fit max-w-full truncate !text-2xl !font-extrabold !mt-1"
            >
              {user.name.toUpperCase()}
            </Typography>
            {user.role === UserRoles.VERIFYED_USER && (
              <Verified className="text-primary-600" />
            )}
          </Box>
          <Typography
            dir={detectDirection(t("newspaper"))}
            className="w-full truncate !text-2xl !font-extrabold"
          >
            {t("newspaper").toUpperCase()}
          </Typography>
        </Box>

        <Box className="flex flex-col gap-8">
          <Box>
            <Typography
              dir={detectDirection(title)}
              className="w-full truncate !text-2xl !font-extrabold"
            >
              {title}
            </Typography>
            <Typography
              dir={detectDirection(description)}
              className="w-full !text-xl !font-medium max-h-20 overflow-hidden truncate-multiline"
            >
              {description}
            </Typography>
          </Box>

          <Box dir="ltr" className="flex justify-between items-center">
            <Box className="flex gap-1">
              <RemoveRedEye />
              <Typography className="!text-base !font-extrabold">
                {views}
              </Typography>
            </Box>

            <Box>
              <FileDownload />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsPaperCard;
