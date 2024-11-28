import { Search } from "@mui/icons-material";
import { Box, CircularProgress, Input, Typography } from "@mui/material";
import UserRow from "../../components/user-row/UserRow";
import UserRowSkeleton from "../../components/user-row/UserRowSkeleton";
import TabsWithAnimation from "../../components/tab-with-animation/TabWithAnimation";
import TabContentWithAnimation from "../../components/tab-content-with-animation/TabContentWithAnimation";
import { useCallback, useEffect, useState } from "react";
import { useSearchUser } from "../../api/user/user.querys";
import { useTranslation } from "react-i18next";
import _ from "lodash";

type tabsType = "posts" | "users";

const TABS = [
  { id: "posts", label: "postsLowerCase" },
  { id: "users", label: "users" },
];

const SearchPage = () => {
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState<tabsType>("posts");

  const { searchUserData, searchUserMutate, searchUserIsPending } =
    useSearchUser();

  useEffect(() => {
    searchUserMutate({ name: "", page: 1, limit: 10 });
  }, []);

  const handleApiCall = useCallback(
    _.debounce((newValue: string) => {
      searchUserMutate({ name: newValue, page: 1, limit: 10 });
    }, 500),
    []
  );

  const handleChange = (newValue: string) => {
    setSearchValue(newValue);
    handleApiCall(newValue);
  };

  return (
    <Box className="p-4 flex flex-col gap-y-4">
      {/* Search Box */}
      <Box className="w-full h-10 p-2 pl-3 bg-tertiary-600 border border-solid border-secondary-800 rounded-3xl flex items-center gap-1">
        {searchUserIsPending ? (
          <CircularProgress className="!size-6" />
        ) : (
          <Search className="text-primary-600" />
        )}

        <Input
          className="!font-light !text-[10px] text-primary-600/50 !border-0 !w-full"
          onChange={(e) => handleChange(e.target.value)}
          value={searchValue}
          disableUnderline
          placeholder={t("searchAmongUsers")}
        />
      </Box>

      {/* Tabs */}
      <TabsWithAnimation
        tabs={TABS.map((tab) => ({ ...tab, label: t(tab.label) }))}
        activeTab={activeTab}
        onChange={(tabId) => setActiveTab(tabId as tabsType)}
      />

      {/* Content Section */}
      <Box className="w-full py-2 px-4 rounded-3xl flex flex-col items-center gap-4 overflow-hidden">
        <TabContentWithAnimation activeKey={activeTab}>
          {activeTab === "posts" ? (
            <Typography>{t("No posts to show.")}</Typography>
          ) : (
            <Box className="w-full py-2 px-4 rounded-3xl flex flex-col items-center gap-4">
              {searchUserIsPending &&
                [1, 2, 3, 4].map((item) => <UserRowSkeleton key={item} />)}

              {searchUserData?.map((user) => (
                <UserRow key={user.id} {...user} />
              ))}

              {searchUserData?.length === 0 && (
                <Typography className="!text-sm text-primary-900 !mt-4">
                  {t("userSearchNoResult")}
                </Typography>
              )}
            </Box>
          )}
        </TabContentWithAnimation>
      </Box>
    </Box>
  );
};

export default SearchPage;
