import { Box, Container } from "@mui/material";
import EngagementSection from "./sections/engagement-section/EngagementSection";
import MainSection from "./sections/main-section/MainSection";
import ConnectionsPanel from "./sections/connections-panel/ConnectionsPanel";

export default function MainLayout() {
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
