import { FC, useEffect, useState } from "react";
import { NewspaperSectionRowProps } from "./@types/newspaper-section-row.type";
import { Box, CircularProgress, Input, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import _ from "lodash";
import {
  useNewsPaperDeleteSection,
  useNewsPaperEditSection,
} from "../../../../../../api/newspaper/newspaper.querys";
import { t } from "i18next";

const NewspaperSectionRow: FC<NewspaperSectionRowProps> = ({
  onClick,
  type,
  order,
  id,
  title,
  refetchSections,
}) => {
  const [orderValue, setOrderValue] = useState(order);

  const { NewsPaperEditSectionMutate, NewsPaperEditSectionIsPending } =
    useNewsPaperEditSection();

  const { NewsPaperDeleteSectionMutate, NewsPaperDeleteSectionIsPending } =
    useNewsPaperDeleteSection();

  useEffect(() => {
    if (orderValue && orderValue !== order) {
      NewsPaperEditSectionMutate(
        { order: orderValue, sectionId: id },
        { onSuccess: () => refetchSections() }
      );
    }
  }, [orderValue]);

  const handleDeleteSection = () => {
    NewsPaperDeleteSectionMutate(id, {
      onSuccess: () => refetchSections(),
    });
  };

  const handleChangeOrder = _.debounce((newValue: number) => {
    setOrderValue(newValue);
  }, 500);

  return (
    <Box className="bg-secondary-600 p-2 rounded-md flex max-md:flex-col justify-between md:items-center">
      <Typography className="flex gap-1">
        {type} -{" "}
        <Box className="text-secondary-500">
          {title[0] ? `${title[0].substring(0, 6)}...` : ""}
        </Box>
      </Typography>

      <Box className="flex items-center max-md:w-full max-md:justify-end gap-2">
        <Box className="flex items-center gap-2">
          <Typography className="!text-sm font-semibold">
            {t("priority")}
          </Typography>
          <Input
            type="number"
            className="max-w-20"
            defaultValue={orderValue}
            onChange={(e) => handleChangeOrder(parseInt(e.target.value))}
            disabled={NewsPaperEditSectionIsPending}
          />
        </Box>
        <Box className="cursor-pointer flex items-center" onClick={onClick}>
          {NewsPaperEditSectionIsPending ? (
            <CircularProgress className="!size-6" />
          ) : (
            <Edit />
          )}
        </Box>
        <Box
          className="cursor-pointer flex items-center"
          onClick={handleDeleteSection}
        >
          {NewsPaperDeleteSectionIsPending ? (
            <CircularProgress className="!size-6" />
          ) : (
            <Delete />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NewspaperSectionRow;
