import { Avatar, Box, Button, Skeleton, Typography } from "@mui/material";
import { UserRoles } from "../../../api/user/user.type";
import InfoSkeleton from "../components/skeleton/InfoSkeleton";
import ProfileBanner from "@/assets/svg/profile-banner.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetUser } from "../../../api/user/user.querys";
import useAuth from "../../../hooks/use-auth.hook";
import { t } from "i18next";
import VerifiedIcon from "@mui/icons-material/Verified";
import { formatDate } from "../../../utils/format-date.util";
import { useCommunity } from "../../../hooks/use-community.hook";

const InformationSection = () => {
  const { followings, followUser, unfollowUser, isPending } = useCommunity();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const userId = searchParams.get("user");
  const id = parseInt(userId || "");

  const { getUserData, getUserLoading } = useGetUser(
    id || (user?.id as number)
  );

  const { avatar, name, email, bio, role, created_at } =
    getUserData?.user || {};

  const userInfoDetails = [
    { count: 0, label: t("posts") },
    { count: 0, label: t("followers") },
    { count: 0, label: t("followed") },
  ];

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
    <>
      <Box className="relative flex w-full justify-center">
        <img src={ProfileBanner} className="w-full" />
        <Box className="absolute -bottom-14">
          {getUserLoading ? (
            <Box className="size-28 bg-secondary-900 rounded-full">
              <Skeleton
                variant="circular"
                className="!h-28 !bg-secondary-600"
              />
            </Box>
          ) : (
            <Avatar
              src={avatar}
              className="!size-28 border-4 border-secondary-900 !text-primary-600 !bg-secondary-600"
            />
          )}
        </Box>
      </Box>
      <Box className="">
        <Box className="w-full flex justify-end p-2 pt-4">
          {!Number.isNaN(id) && id !== user?.id ? (
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

        {getUserLoading ? (
          <InfoSkeleton />
        ) : (
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

            <Typography className="!mt-4 px-10 text-center !text-sm">
              {bio}
            </Typography>
          </Box>
        )}

        <Box className="flex items-center gap-4 w-full justify-center mt-6">
          {userInfoDetails.map((item, index) => (
            <Box key={index} className="flex flex-col items-center">
              {getUserLoading ? (
                <>
                  <Skeleton variant="text" className="!w-5 !bg-secondary-600" />
                  <Skeleton
                    variant="text"
                    className="!w-12 !bg-secondary-600"
                  />
                </>
              ) : (
                <>
                  <Typography className="!text-base !font-medium">
                    {item.count}
                  </Typography>
                  <Typography className="!text-xs !font-semibold">
                    {item.label}
                  </Typography>
                </>
              )}
            </Box>
          ))}
        </Box>

        <Box className="flex justify-center">
          {getUserLoading ? (
            <Skeleton
              variant="text"
              className="!w-1/3 !bg-secondary-600 !mt-4"
            />
          ) : (
            <Typography className="!text-xs !font-light text-white/50 text-center !mt-4">
              {t("joinedAt")} {formatDate(created_at || "")}
            </Typography>
          )}
        </Box>

        <Box component={"hr"} className="border-white/25 mt-4 !mx-4" />
      </Box>
    </>
  );
};

export default InformationSection;
