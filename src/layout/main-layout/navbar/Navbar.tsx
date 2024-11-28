// import {
//   Mode,
//   Newspaper,
//   PostAdd,
//   Search,
//   SupervisorAccount,
// } from "@mui/icons-material";
// import { Box } from "@mui/material";

// const Navbar = () => {
//   return (
//     <Box className="w-full fixed left-0 bottom-4 flex justify-center items-center">
//       <Box className="w-80 h-11 p-2 px-4 bg-secondary-600/50 backdrop-blur-sm border border-solid text-primary-700 border-primary-700 rounded-3xl flex items-center justify-between gap-1">
//         <Newspaper />
//         <SupervisorAccount />
//         <Box className="text-primary-600 bg-secondary-600 border border-solid border-primary-600 rounded-full p-1">
//           <Mode />
//         </Box>
//         <Search />
//         <PostAdd />
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;

import {
  Mode,
  Newspaper,
  PostAdd,
  Search,
  SupervisorAccount,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// تعریف آرایه لینک‌ها
const navItems = [
  { id: 1, icon: <Newspaper />, link: "/home" },
  { id: 2, icon: <SupervisorAccount />, link: "/account" },
  { id: 3, icon: <Mode />, link: "/settings/mode" },
  { id: 4, icon: <Search />, link: "/search" },
  { id: 5, icon: <PostAdd />, link: "/post" },
];

const Navbar = () => {
  // وضعیت برای ذخیره آیتم انتخاب‌شده
  const [selected, setSelected] = useState<number | null>(null);

  // استفاده از useNavigate برای هدایت
  const navigate = useNavigate();

  // تابع برای هدایت به صفحه
  const handleNavigation = (link: string, id: number) => {
    setSelected(id); // تغییر وضعیت انتخاب آیتم
    navigate(link); // هدایت به صفحه
  };

  return (
    <Box className="w-full fixed left-0 bottom-4 flex justify-center items-center">
      <Box className="w-80 h-11 p-2 px-4 bg-secondary-600/50 backdrop-blur-sm border border-solid text-primary-700 border-primary-700 rounded-3xl flex items-center justify-between gap-1">
        {/* مپ روی آیتم‌های ناوبری */}
        {navItems.map(({ id, icon, link }) => (
          <IconButton
            key={id}
            onClick={() => handleNavigation(link, id)} // تغییر مسیر با استفاده از useNavigate
            className={`${
              selected === id
                ? "text-primary-600 bg-secondary-600 border border-solid border-primary-600 rounded-full p-1"
                : ""
            }`}
          >
            {icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
