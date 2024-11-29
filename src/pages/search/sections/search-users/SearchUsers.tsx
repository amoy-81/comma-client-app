import { Box, Typography } from "@mui/material";
import UserRow from "../../../../components/user-row/UserRow";
import UserRowSkeleton from "../../../../components/user-row/UserRowSkeleton";
import { useSearchUser } from "../../../../api/user/user.querys";
import { useTranslation } from "react-i18next";
import { FC, useEffect } from "react";

interface SearchUsersProps {
  searchValue: string;
}

const SearchUsers: FC<SearchUsersProps> = ({ searchValue }) => {
  const { t } = useTranslation();
  const { searchUserData, searchUserMutate, searchUserIsPending } =
    useSearchUser();

  useEffect(() => {
    searchUserMutate({ name: searchValue, page: 1, limit: 10 });
  }, [searchValue, searchUserMutate]);

  return (
    <Box className="w-full py-2 rounded-3xl flex flex-col items-center gap-4">
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
  );
};

export default SearchUsers;
