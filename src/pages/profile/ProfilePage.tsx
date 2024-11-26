import { Avatar, Box, Button, Typography } from "@mui/material";
import ProfileBanner from "@/assets/svg/profile-banner.svg";
import { useSearchParams } from "react-router-dom";
import { useGetUser } from "../../api/user/user.querys";
import useAuth from "../../hooks/use-auth.hook";
import VerifiedIcon from "@mui/icons-material/Verified";
import { UserRoles } from "../../api/user/user.type";

const ProfilePage = () => {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();

  const userId = searchParams.get("user");

  const { getUserData, getUserLoading } = useGetUser(
    parseInt(userId || "") || (user?.id as number)
  );

  const { avatar, name, email, bio, role } = getUserData?.user || {};

  return (
    <Box className="p-4">
      <Box className="relative flex w-full justify-center">
        <img src={ProfileBanner} className="w-full" />
        <Box className="absolute -bottom-14">
          <Avatar
            src={avatar}
            className="!size-28 border-4 border-secondary-900 !text-primary-600 !bg-secondary-600"
          />
        </Box>
      </Box>
      <Box className="">
        <Box className="w-full flex justify-end p-2 pt-4">
          <Button
            className="!text-sm !font-semibold !rounded-2xl"
            variant="contained"
          >
            Follow
          </Button>
        </Box>

        <Box className="flex flex-col items-center">
          <Box className="flex justify-center gap-1 items-center mt-2">
            <Typography className="!text-sm">{name}</Typography>
            {role === UserRoles.VERIFYED_USER && (
              <VerifiedIcon className="text-primary-600 !size-4" />
            )}
          </Box>
          <Typography className=" text-primary-600 !text-xs">
            {email}
          </Typography>

          <Typography className="!mt-4 px-10 text-center !text-sm">{bio}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
