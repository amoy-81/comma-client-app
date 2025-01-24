import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetOneNewsPaper } from "../../../../api/newspaper/newspaper.querys";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { t } from "i18next";
import NewspaperSectionForm from "./components/newspaper-section-form/NewspaperSectionForm";

const NewspaperEditPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const newspaperId = searchParams.get("newspaperId");
  const id = parseInt(newspaperId || "");

  const [showAddSection, setShowAddSection] = useState(false);

  const { getOneNewsPapersData, getOneNewsPapersLoading } =
    useGetOneNewsPaper(id);

  useEffect(() => {
    if (getOneNewsPapersData && !getOneNewsPapersData.id) {
      navigate("/newspaper");
    }
  }, [getOneNewsPapersData]);

  const handleShowAddSectionModal = () => {
    setShowAddSection(true);
  };

  const handleCloseAddSectionModal = () => {
    setShowAddSection(false);
  };

  return (
    <>
      <Box className="flex w-full justify-between items-center">
        <Button variant="contained" size="small">
          {t("preview")}
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={handleShowAddSectionModal}
        >
          {t("addSection")}
        </Button>
      </Box>

      <NewspaperSectionForm
        open={showAddSection}
        onClose={handleCloseAddSectionModal}
      />
    </>
  );
};

export default NewspaperEditPage;
