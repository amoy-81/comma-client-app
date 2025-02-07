import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetOneNewsPaper } from "../../../../api/newspaper/newspaper.querys";
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { t } from "i18next";
import NewspaperSectionForm from "./components/newspaper-section-form/NewspaperSectionForm";
import { Edit } from "@mui/icons-material";
import { NewspaperSection } from "../../../../api/newspaper/newspaper.type";
import EmptyIllastation from "../../../../assets/svg/empty-2.svg";

const NewspaperEditPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const newspaperId = searchParams.get("newspaperId");
  const id = parseInt(newspaperId || "");

  const [showAddSection, setShowAddSection] = useState(false);
  const [selectedEditSection, setSelectedEditSection] =
    useState<NewspaperSection | null>(null);

  const {
    getOneNewsPapersData,
    getOneNewsPapersIsPending,
    getOneNewsPapersRefetch,
  } = useGetOneNewsPaper(id);

  useEffect(() => {
    if (getOneNewsPapersData && !getOneNewsPapersData.id) {
      navigate("/newspaper");
    }
  }, [getOneNewsPapersData]);

  const handleOpenEditSection = (item: NewspaperSection) => {
    setSelectedEditSection(item);
    setShowAddSection(true);
  };

  const handleAddSectionOnSuccess = () => {
    getOneNewsPapersRefetch();
  };

  const handleShowAddSectionModal = () => {
    setSelectedEditSection(null);
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

      {getOneNewsPapersIsPending && <p>Loading...</p>}

      <Box className="flex flex-col gap-4 mt-4">
        {getOneNewsPapersData?.sections.map((item) => (
          <Box
            onClick={() => handleOpenEditSection(item)}
            className="bg-secondary-600 p-2 rounded-md flex justify-between items-center cursor-pointer hover:bg-primary-500"
          >
            <Typography>{item.type}</Typography>
            <Edit />
          </Box>
        ))}
      </Box>

      {getOneNewsPapersData?.sections.length === 0 && (
        <Box className="w-full flex justify-center items-center p-6">
          <img src={EmptyIllastation} alt="empty" />
        </Box>
      )}

      <NewspaperSectionForm
        newsPaperId={id}
        open={showAddSection}
        onClose={handleCloseAddSectionModal}
        onSuccess={handleAddSectionOnSuccess}
        sectionDefaultValue={selectedEditSection}
        resetDefaultValue={() => setSelectedEditSection(null)}
      />
    </>
  );
};

export default NewspaperEditPage;
