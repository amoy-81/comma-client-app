import { Box, Container } from "@mui/material";
import EngagementSection from "./sections/engagement-section/EngagementSection";
import MainSection from "./sections/main-section/MainSection";
import ConnectionsPanel from "./sections/connections-panel/ConnectionsPanel";
import { useEffect } from "react";
import useAuth from "../../hooks/use-auth.hook";
import { useGetUser } from "../../api/user/user.querys";
import useCommunityStore from "../../store/community/community.store";

export default function MainLayout() {
  const { setFollowings } = useCommunityStore();
  const { user } = useAuth();

  const { getUserData } = useGetUser(user?.id as number);

  useEffect(() => {
    if (user && getUserData) {
      setFollowings(getUserData.related.following);
    }
  }, [user, getUserData]);

  return (
    <Container maxWidth="xl">
      <Box className="w-full grid grid-cols-12 gap-4 md:p-4">
        <ConnectionsPanel />
        <MainSection />
        <EngagementSection />
      </Box>
    </Container>
  );
}
