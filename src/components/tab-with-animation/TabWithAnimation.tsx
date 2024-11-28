import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { mergeClasses } from "../../utils/merge-classess.util";
import { TabsWithAnimationProps } from "./@types/tab-with-animation.type";
import useLanguageStore from "../../store/lang/lang.store";
import { FC } from "react";

const TabsWithAnimation: FC<TabsWithAnimationProps> = ({
  tabs,
  activeTab,
  onChange,
}) => {
  const { lang } = useLanguageStore();

  return (
    <Box className="relative w-full flex items-center justify-around">
      {tabs.map((tab) => (
        <Typography
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={mergeClasses(
            "cursor-pointer text-sm !font-bold",
            activeTab === tab.id ? "text-primary-600" : "text-secondary-500"
          )}
        >
          {tab.label}
        </Typography>
      ))}

      {/* Animated Underline */}
      <motion.div
        className="absolute -bottom-2 h-0.5 bg-primary-600 rounded"
        initial={false}
        animate={{
          [lang === "fa" ? "right" : "left"]: `${
            (tabs.findIndex((t) => t.id === activeTab) / tabs.length) * 100
          }%`,
          width: `${100 / tabs.length}%`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </Box>
  );
};

export default TabsWithAnimation;
