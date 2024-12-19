import {
  Mode,
  Newspaper,
  Notifications,
  PostAdd,
  Search,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { mergeClasses } from "../../../utils/merge-classess.util";
import { useGetUnreadCountNotif } from "../../../api/notif/notif.querys";

const navItems = [
  { id: 1, icon: <Newspaper />, link: "/newspaper" },
  { id: 4, icon: <Search />, link: "/search" },
  { id: 3, icon: <Mode />, link: "/" },
  { id: 2, icon: <Notifications />, link: "/notif" },
  { id: 5, icon: <PostAdd />, link: "/board" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { getUnreadCountNotifData } = useGetUnreadCountNotif();

  // Determine the selected item based on the current path
  const selectedId =
    navItems.find((item) => location.pathname === item.link)?.id || null;

  const handleNavigation = (link: string) => {
    navigate(link);
  };

  return (
    <Box className="w-full fixed left-0 bottom-4 flex justify-center items-center">
      <Box className="w-80 h-11 p-2 px-4 !bg-secondary-600/50 backdrop-blur-lg border border-solid !text-primary-700 !border-primary-700 rounded-3xl flex items-center justify-between gap-1">
        {navItems.map(({ id, icon, link }) => (
          <Box
            key={id}
            onClick={() => handleNavigation(link)}
            className={mergeClasses(
              "cursor-pointer transition active:scale-90",
              selectedId === id
                ? "!text-primary-600 !bg-secondary-600 border border-solid !border-primary-600 rounded-full p-1"
                : ""
            )}
          >
            {link === "/notif" ? (
              <Box className="relative">
                {!!getUnreadCountNotifData?.count && (
                  <Box
                    component={"span"}
                    className="bg-red-600 rounded-full absolute text-white text-[10px] font-bold px-1 -right-1 flex justify-center items-center"
                  >
                    {getUnreadCountNotifData?.count}
                  </Box>
                )}
                {icon}
              </Box>
            ) : (
              icon
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
