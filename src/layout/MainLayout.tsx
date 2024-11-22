import { Avatar, Box, Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Logo from "../assets/svg/logo.svg";
import { ArrowBack, Search } from "@mui/icons-material";

export default function MainLayout() {
  return (
    <Container maxWidth="xl">
      <Box className="w-full grid grid-cols-12 gap-4 md:p-4">
        <Box className="xl:col-span-3 col-span-4 hidden md:flex flex-col gap-4">
          {/* Brand Logo Section */}
          <Box className="sticky top-4 w-full h-10 p-2 pl-3 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl flex items-center gap-1">
            <img src={Logo} className="size-6" />
            <Typography className="!font-extrabold !text-sm text-primary-600">
              COMMA
            </Typography>
            <Typography className="!font-light !text-[10px] text-primary-600/50 truncate">
              A platform to present ideas
            </Typography>
          </Box>

          <Box className="w-full h-[70vh] bg-secondary-900 border border-solid border-secondary-800 rounded-3xl">
            <Typography>Board</Typography>
          </Box>

          <Box className="w-full h-40 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl">
            <Typography>Profile</Typography>
          </Box>
        </Box>

        <Box className="md:bg-secondary-900 md:border border-solid border-secondary-800 xl:col-span-6 md:col-span-8 col-span-12 rounded-3xl ">
          <Box className="sticky top-4 w-full h-10 p-2 pl-3 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl hidden max-md:flex items-center justify-between gap-1">
            <Box>
              <ArrowBack className="text-primary-600" />
            </Box>
            <Box className="flex items-center gap-1">
              <img src={Logo} className="size-6" />
              <Typography className="!font-extrabold !text-sm text-primary-600">
                COMMA
              </Typography>
            </Box>
            <Box className="">
              <Avatar className="!size-8  !text-primary-600 !bg-secondary-600" />
            </Box>
          </Box>
          <Outlet />
        </Box>
        <Box className="col-span-3 hidden xl:flex flex-col gap-4">
          <Box className="w-full h-10 p-2 pl-3 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl flex items-center gap-1">
            <Search className="text-primary-600" />
            <Typography className="!font-light !text-[10px] text-primary-600/50">
              Search among users...
            </Typography>
          </Box>

          <Box className="w-full h-48 p-2 pl-3 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl flex items-center gap-1">
            <Typography className="!font-light !text-[10px] text-primary-600/50">
              Search Result
            </Typography>
          </Box>

          <Box className="w-full h-full p-2 pl-3 bg-secondary-900 border border-solid border-secondary-800 rounded-3xl flex items-center gap-1">
            <Typography className="!font-light !text-[10px] text-primary-600/50">
              Trends
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
