import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";
import { TabContentWithAnimationProps } from "./@types/tab-content-with-animation.type";

const TabContentWithAnimation: FC<TabContentWithAnimationProps> = ({
  activeKey,
  children,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeKey}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 50 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TabContentWithAnimation;
