import { Avatar, Box, Typography } from "@mui/material";
import useAuth from "../../../../../../hooks/use-auth.hook";

const ProfileCard = () => {
  const { user } = useAuth();
  return (
    <Box className="w-full h-16 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl flex gap-2 items-center p-2">
      <Avatar
        src={user?.avatar}
        className="!size-11 border-4 border-secondary-900 !text-primary-600 !bg-secondary-600"
      />
      <Box className="flex flex-col">
        <Typography className="!w-32 !text-sm !font-normal !truncate">
          {user?.name}
        </Typography>
        <Typography className="!w-32 !text-xs !font-normal !text-secondary-400 !truncate">
          {user?.email}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileCard;
