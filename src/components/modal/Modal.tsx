import { Box, Modal as MUIModal } from "@mui/material";
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
        className={mergeClasses(
          "w-2/4 max-h-[calc(100%-10%)] overflow-auto bg-secondary-600 p-4 rounded-md",
          className
        )}
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
