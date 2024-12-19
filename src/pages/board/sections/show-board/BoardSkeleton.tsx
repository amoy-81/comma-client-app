import { Box, Skeleton } from "@mui/material";

const InfoSkeleton = () => {
  return (
    <Box
      style={{
        backgroundColor: "#0D1117",
        borderRadius: "8px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <Box key={index} display="flex" gap="12px" alignItems="flex-start">
          <Skeleton variant="circular" width={48} height={48} style={{ backgroundColor: "#30363D" }} />

          <Box flex={1}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Skeleton
                  variant="text"
                  width="100px"
                  height="16px"
                  style={{ backgroundColor: "#30363D", marginBottom: "8px" }}
                />
                <Skeleton
                  variant="text"
                  width="80px"
                  height="12px"
                  style={{ backgroundColor: "#30363D" }}
                />
              </Box>
              <Skeleton
                variant="text"
                width="40px"
                height="12px"
                style={{ backgroundColor: "#30363D" }}
              />
            </Box>
            <Skeleton
              variant="text"
              width="100%"
              height="16px"
              style={{ backgroundColor: "#30363D", marginTop: "8px" }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default InfoSkeleton;
