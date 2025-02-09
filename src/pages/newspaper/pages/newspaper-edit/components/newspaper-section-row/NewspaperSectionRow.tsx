import { FC, useEffect, useState } from "react";
import { NewspaperSectionRowProps } from "./@types/newspaper-section-row.type";
import { Box, CircularProgress, Input, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import _ from "lodash";
import { useNewsPaperEditSection } from "../../../../../../api/newspaper/newspaper.querys";
import { t } from "i18next";

const NewspaperSectionRow: FC<NewspaperSectionRowProps> = ({
  onClick,
  type,
  order,
  id,
  refetchSections,
}) => {
  const [orderValue, setOrderValue] = useState(order);

  const { NewsPaperEditSectionMutate, NewsPaperEditSectionIsPending } =
    useNewsPaperEditSection();

  useEffect(() => {
    if (orderValue && orderValue !== order) {
      NewsPaperEditSectionMutate(
        { order: orderValue, sectionId: id },
        { onSuccess: () => refetchSections() }
      );
    }
  }, [orderValue]);

  const handleChangeOrder = _.debounce((newValue: number) => {
    setOrderValue(newValue);
  }, 500);

  return (
    <Box className="bg-secondary-600 p-2 rounded-md flex justify-between items-center">
      <Typography>{type}</Typography>

      <Box className="flex items-center gap-2">
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
      </Box>
    </Box>
  );
};

export default NewspaperSectionRow;
