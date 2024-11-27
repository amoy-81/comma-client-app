import { Search } from "@mui/icons-material";
import { Box, CircularProgress, Input, Typography } from "@mui/material";
import { useSearchUser } from "../../../../../api/user/user.querys";
import { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import UserRow from "../../../../../components/user-row/UserRow";
import UserRowSkeleton from "../../../../../components/user-row/UserRowSkeleton";
import { useNavigate } from "react-router-dom";
import { SearchPageMode } from "../../../../../@types/general.type";
import { useTranslation } from "react-i18next";

const ShortSearchUser = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const { searchUserData, searchUserMutate, searchUserIsPending } =
    useSearchUser();

  useEffect(() => {
    searchUserMutate({ name: "", page: 1, limit: 5 });
  }, []);

  const handleApiCall = useCallback(
    _.debounce((newValue: string) => {
      searchUserMutate({ name: newValue, page: 1, limit: 5 });
    }, 500),
    []
  );

  const handleChange = (newValue: string) => {
    setSearchValue(newValue);
    handleApiCall(newValue);
  };

  const handleViewMoreClick = () => {
    navigate(`/search?mode=${SearchPageMode.Users}`);
  };

  return (
    <>
      <Box className="w-full h-10 p-2 pl-3 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl flex items-center gap-1">
        {searchUserIsPending ? (
          <CircularProgress className="!size-6" />
        ) : (
          <Search className="text-primary-600" />
        )}

        <Input
          className="!font-light !text-[10px] text-primary-600/50 !border-0"
          onChange={(e) => handleChange(e.target.value)}
          value={searchValue}
          disableUnderline
          placeholder={t("searchAmongUsers")}
        />
      </Box>

      <Box className="w-full py-2 px-4 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl flex flex-col items-center gap-2">
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

        <Box className="flex justify-center p-2 w-full">
          <Typography
            onClick={handleViewMoreClick}
            className="!text-sm text-primary-600 !font-medium cursor-pointer"
          >
            {t("viewMore")}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ShortSearchUser;
