import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetOneNewsPaper } from "../../../../api/newspaper/newspaper.querys";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { t } from "i18next";
import NewspaperSectionForm from "./components/newspaper-section-form/NewspaperSectionForm";
import { NewspaperSection } from "../../../../api/newspaper/newspaper.type";
import EmptyIllastation from "../../../../assets/svg/empty-2.svg";
import Modal from "../../../../components/modal/Modal";
import NewspaperViewPage from "../newspaper-view/NewspaperViewPage";
import NewspaperEditInfo from "./components/newspaper-edit-info/NewspaperEditInfo";
import NewspaperSectionRow from "./components/newspaper-section-row/NewspaperSectionRow";
import SuspansLoader from "../../../../components/suspans-loader/SuspansLoader";

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
    getOneNewsPapersIsFetching,
  } = useGetOneNewsPaper(id);

  useEffect(() => {
    if (getOneNewsPapersData && !getOneNewsPapersData.id) {
      navigate("/newspaper");
    }
  }, [getOneNewsPapersData]);

  const sectionsList = getOneNewsPapersData?.sections.sort(
    (a, b) => b.order - a.order
  );

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
        <Box className="flex items-center gap-2">
          <Button
            variant="contained"
            size="small"
            onClick={handleShowPreviewModal}
          >
            {t("preview")}
          </Button>
          {getOneNewsPapersIsFetching && <h1>Updating...</h1>}
        </Box>

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

      {getOneNewsPapersIsPending && <SuspansLoader />}

      <Box className="flex flex-col gap-4 mt-4">
        {!getOneNewsPapersIsPending &&
          sectionsList?.map((item) => (
            <NewspaperSectionRow
              key={item.id}
              {...item}
              refetchSections={() => getOneNewsPapersRefetch()}
              onClick={() => handleOpenEditSection(item)}
            />
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
