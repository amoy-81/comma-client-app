import { Box, Modal as MUIModal, useMediaQuery, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { Clear } from "@mui/icons-material";
import { mergeClasses } from "../../utils/merge-classess.util";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

const Modal: FC<ModalProps> = ({ open, onClose, children, className }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MUIModal
      open={open}
      onClose={onClose}
      className="flex justify-center items-end sm:items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: isMobile ? "100%" : -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: isMobile ? "100%" : -50 }}
        transition={{ duration: 0.3 }}
        className={mergeClasses(
          "w-full sm:w-2/4 max-h-[calc(100%-10%)] overflow-auto bg-secondary-600 p-4 rounded-t-lg sm:rounded-md",
          className
        )}
      >
        {/* Title */}
        <Box className="flex justify-end">
          <Box className="cursor-pointer" onClick={onClose}>
            <Clear />
          </Box>
        </Box>
        <Box className="w-full h-full mt-4">{children}</Box>
      </motion.div>
    </MUIModal>
  );
};

export default Modal;
