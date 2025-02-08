import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetOneNewsPaper } from "../../../../api/newspaper/newspaper.querys";
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { t } from "i18next";
import NewspaperSectionForm from "./components/newspaper-section-form/NewspaperSectionForm";
import { Edit } from "@mui/icons-material";
import { NewspaperSection } from "../../../../api/newspaper/newspaper.type";
import EmptyIllastation from "../../../../assets/svg/empty-2.svg";
import Modal from "../../../../components/modal/Modal";
import NewspaperViewPage from "../newspaper-view/NewspaperViewPage";
import NewspaperEditInfo from "./components/newspaper-edit-info/NewspaperEditInfo";

const NewspaperEditPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const newspaperId = searchParams.get("newspaperId");
  const id = parseInt(newspaperId || "");

  const [showPreview, setShowPreview] = useState(false);
  const [showAddSection, setShowAddSection] = useState(false);
  const [showEditInfo, setShowEditInfo] = useState(false);
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

  const handleShowPreviewModal = () => {
    setShowPreview(true);
  };

  const handleClosePreviewModal = () => {
    setShowPreview(false);
  };

  const handleShowEditSectionModal = () => {
    setShowEditInfo(true);
  };

  const handleCloseEditSectionModal = () => {
    setShowEditInfo(false);
  };

  return (
    <>
      <Box className="flex w-full justify-between items-center">
        <Button
          variant="contained"
          size="small"
          onClick={handleShowPreviewModal}
        >
          {t("preview")}
        </Button>

        <Box className="flex items-center gap-2">
          <Button
            variant="contained"
            size="small"
            onClick={handleShowEditSectionModal}
          >
            {t("editInfo")}
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={handleShowAddSectionModal}
          >
            {t("addSection")}
          </Button>
        </Box>
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

      <Modal open={showPreview} onClose={handleClosePreviewModal}>
        <NewspaperViewPage />
      </Modal>

      <NewspaperEditInfo
        open={showEditInfo}
        onClose={handleCloseEditSectionModal}
      />
    </>
  );
};

export default NewspaperEditPage;
