import React from "react";
import { Avatar, Box, Typography, Divider } from "@mui/material";
import { useGetBoard } from "../../../../api/board/board.querys";
import InfoSkeleton from "./BoardSkeleton";

const ShowBoard: React.FC = () => {
  const { getBoardData, getBoardLoading } = useGetBoard({ page: 1, pageSize: 10 });

  if (getBoardLoading) {
    return (
      <Box
        style={{
          backgroundColor: "#0D1117",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <InfoSkeleton />
      </Box>
    );
  }

  if (!getBoardData || getBoardData.length === 0) {
    return <Typography style={{ color: "#888" }}>No messages to display.</Typography>;
  }

  return (
    <Box
    style={{
      backgroundColor: "#090F19",
      color: "#E6EDF3",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <Divider style={{ backgroundColor: "#090F19", marginBottom: "16px" }} />
  
    <Box display="flex" flexDirection="column" gap="16px">
      {getBoardData.map((item, index) => (
        <Box key={item.id} display="flex" gap="12px" alignItems="flex-start">
          <Avatar src={item.user?.avatar || ""} alt={item.user?.name} style={{ width: 48, height: 48 }} />
          <Box flex={1}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography style={{ fontWeight: "bold", color: "#FFF" }}>
                  {item.user?.name}
                </Typography>
                <Typography style={{ fontSize: "14px", color: "#8B949E" }}>
                  {item.user?.email ? item.user.email : "No email provided"}
                </Typography>
              </Box>
              <Typography style={{ fontSize: "12px", color: "#6E7681" }}>
                {`${300 - index * 30}s`}
              </Typography>
            </Box>
            <Typography style={{ marginTop: "4px", color: "#E6EDF3" }}>
              {item?.text}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
  
  );
};

export default ShowBoard;
