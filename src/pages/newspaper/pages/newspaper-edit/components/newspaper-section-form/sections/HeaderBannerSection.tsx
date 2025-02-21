import { Clear, UploadFile } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import { FC } from "react";
import { SectionFileProps } from "../@types/newspaper-section-form.type";
import { getImageUrl } from "../../../../../../../utils/get-image-url.util";

const HeaderBannerSection: FC<SectionFileProps> = ({ file, setFile }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleClearFile = () => {
    setFile(null);
  };

  return (
    <>
      {file ? (
        <Box className="flex justify-center w-full">
          <Box className="w-full h-auto relative p-1 overflow-hidden rounded">
            <img
              src={
                typeof file === "string"
                  ? getImageUrl(file)
                  : URL.createObjectURL(file)
              }
              alt="Banner Preview"
              className="w-full"
            />

            <Box
              className="absolute right-0 top-0 p-1 m-2 cursor-pointer bg-secondary-600 rounded-full"
              onClick={handleClearFile}
            >
              <Clear className="!size-6" />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          component={"label"}
          htmlFor="bannerFile"
          className="rounded h-full border border-dashed border-primary-600 !text-primary-600 p-10 flex flex-col justify-center items-center gap-2"
        >
          <UploadFile className="!size-14" />
          <Typography>{t("uploadDesc")}</Typography>
        </Box>
      )}

      <input
        type="file"
        id="bannerFile"
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
    </>
  );
};

export default HeaderBannerSection;
