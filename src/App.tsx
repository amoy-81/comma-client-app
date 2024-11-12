import { Box, TextField, Typography } from "@mui/material";

const App = () => {
  return (
    <Box className="p-4">
      <h1 className="text-red-500">Hello World</h1>
      <Typography sx={{ color: "red" }}>Hello MUI</Typography>
      <TextField label="Hiiii" variant="standard" />
    </Box>
  );
};

export default App;
