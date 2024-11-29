import { Search } from "@mui/icons-material";
import { Box, Input } from "@mui/material";
import TabsWithAnimation from "../../components/tab-with-animation/TabWithAnimation";
import TabContentWithAnimation from "../../components/tab-content-with-animation/TabContentWithAnimation";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SearchUsers from "./sections/search-users/SearchUsers";
import { useSearchParams } from "react-router-dom";
import _ from "lodash";
import SearchPosts from "./sections/search-posts/SearchPosts";

const TABS = [
  { id: "posts", label: "postsLowerCase" },
  { id: "users", label: "users" },
];

const SearchPage = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const mode = searchParams.get("mode") || "posts";
  const [searchValue, setSearchValue] = useState("");

  const serachPlaceholder =
    mode === "posts"
      ? t("searchAmongPosts")
      : mode === "users"
      ? t("searchAmongUsers")
      : t("searchPlaceholder");

  const handleTabChange = (tabId: string) => {
    setSearchParams({ mode: tabId });
  };

  const handleSearch = _.debounce((newValue: string) => {
    setSearchValue(newValue);
  }, 500);

  return (
    <Box className="md:p-4 p-2 flex flex-col gap-y-4">
      {/* Search Box */}
      <Box className="w-full h-10 p-2 pl-3 bg-tertiary-600 border border-solid border-secondary-800 rounded-3xl flex items-center gap-1">
        <Search className="text-primary-600" />

        <Input
          className="!font-light !text-[10px] text-primary-600/50 !border-0 !w-full"
          onChange={(e) => handleSearch(e.target.value)}
          disableUnderline
          placeholder={serachPlaceholder}
        />
      </Box>

      {/* Tabs */}
      <TabsWithAnimation
        tabs={TABS.map((tab) => ({ ...tab, label: t(tab.label) }))}
        activeTab={mode}
        onChange={handleTabChange}
      />

      {/* Content Section */}
      <Box className="w-full py-2 md:px-4 px-2 rounded-3xl flex flex-col items-center gap-4 overflow-hidden">
        <TabContentWithAnimation activeKey={mode}>
          {mode === "posts" ? (
            <SearchPosts searchValue={searchValue} />
          ) : (
            <SearchUsers searchValue={searchValue} />
          )}
        </TabContentWithAnimation>
      </Box>
    </Box>
  );
};

export default SearchPage;
