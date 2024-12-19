import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/main-layout/MainLayout";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/auth/pages/login/LoginPage";
import AuthProvider from "../pages/auth/providers/auth.provider";
import AuthLayout from "../layout/auth-layout/AuthLayout";
import ProfilePage from "../pages/profile/ProfilePage";
import SearchPage from "../pages/search/SearchPage";
import BoardPage from "../pages/board/BoardPage";
import NewspaperPage from "../pages/newspaper/NewspaperPage";
import PostPage from "../pages/post/PostPage";
import NotifPage from "../pages/notif/NotifPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider mode="panel">
        <MainLayout />
      </AuthProvider>
    ),
    children: [
      { path: "", element: <HomePage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "board", element: <BoardPage /> },
      { path: "newspaper", element: <NewspaperPage /> },
      { path: "post", element: <PostPage /> },
      { path: "notif", element: <NotifPage /> },
    ],
  },
  {
    path: "/auth",
    element: (
      <AuthProvider mode="auth">
        <AuthLayout />
      </AuthProvider>
    ),
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <LoginPage /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);

export default router;
