import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "home", element: <HomePage /> }],
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);

export default router;
