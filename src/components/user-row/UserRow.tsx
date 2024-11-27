import { Avatar, Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { UserRowProps } from "./@types/user-row.type";
import { useNavigate } from "react-router-dom";
import { UserRoles } from "../../api/user/user.type";
import VerifiedIcon from "@mui/icons-material/Verified";
import { t } from "i18next";

const UserRow: FC<UserRowProps> = ({ id, name, avatar, role }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile?user=${id}`);
  };

  return (
    <Box className="w-full flex items-center justify-between">
      <Box
        className="flex items-center gap-2 cursor-pointer !w-2/3"
        onClick={handleClick}
      >
        <Avatar
          className="size-10  !text-primary-600 !bg-secondary-600"
          src={avatar || ""}
        />

        <Typography className="!text-sm truncate">{name}</Typography>

        {role === UserRoles.VERIFYED_USER && (
          <VerifiedIcon className="text-primary-600 !size-4" />
        )}
      </Box>

      <Button variant="contained" className="!h-8 !text-xs " size="small">
        {t("follow")}
      </Button>
    </Box>
  );
};

export default UserRow;
