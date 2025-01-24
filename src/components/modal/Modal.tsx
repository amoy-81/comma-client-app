import { Box, Modal as MUIModal } from "@mui/material";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { Clear } from "@mui/icons-material";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <MUIModal
      open={open}
      onClose={onClose}
      className="flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="w-2/4 bg-secondary-600 p-4 rounded-md"
      >
        {/* Title */}
        <Box className="flex justify-end">
          <Box onClick={onClose}>
            <Clear />
          </Box>
        </Box>
        <Box className="w-full h-full mt-4">{children}</Box>
      </motion.div>
    </MUIModal>
  );
};

export default Modal;
