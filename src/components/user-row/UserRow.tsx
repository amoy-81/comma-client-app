import { Avatar, Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { UserRowProps } from "./@types/user-row.type";
import { useNavigate } from "react-router-dom";
import { UserRoles } from "../../api/user/user.type";
import VerifiedIcon from "@mui/icons-material/Verified";
import { t } from "i18next";
import { useCommunity } from "../../hooks/use-community.hook";
import useAuth from "../../hooks/use-auth.hook";

const UserRow: FC<UserRowProps> = ({ id, name, avatar, role }) => {
  const { user } = useAuth();
  const { followings, followUser, unfollowUser, isPending } = useCommunity();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile?user=${id}`);
  };

  const handleFollow = () => {
    followUser(id);
  };

  const handleunFollow = () => {
    unfollowUser(id);
  };

  const handleNavigateProfile = () => {
    navigate("/profile");
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

      {id !== user?.id ? (
        !followings.includes(id) ? (
          <Button
            onClick={handleFollow}
            disabled={isPending}
            variant="contained"
            className="!h-8 !w-20 !text-xs "
            size="small"
          >
            {isPending ? t("wait...") : t("follow")}
          </Button>
        ) : (
          <Button
            onClick={handleunFollow}
            disabled={isPending}
            variant="outlined"
            className="!h-8 !w-20 !text-xs "
            size="small"
          >
            {isPending ? t("wait...") : t("remove")}
          </Button>
        )
      ) : (
        <Button
          onClick={handleNavigateProfile}
          disabled={isPending}
          variant="text"
          className="!h-8 !w-20 !text-xs "
          size="small"
        >
          {t("profile")}
        </Button>
      )}
    </Box>
  );
};

export default UserRow;
