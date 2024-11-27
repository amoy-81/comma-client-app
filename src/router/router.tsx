import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/main-layout/MainLayout";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/auth/pages/login/LoginPage";
import PostsPage from "../pages/posts/PostsPage";
import AuthProvider from "../pages/auth/providers/auth.provider";
import AuthLayout from "../layout/auth-layout/AuthLayout";
import ProfilePage from "../pages/profile/ProfilePage";
import SearchPage from "../pages/search/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider mode="panel">
        <MainLayout />
      </AuthProvider>
    ),
    children: [
      { path: "home", element: <HomePage /> },
      { path: "posts", element: <PostsPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "search", element: <SearchPage /> },
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
    element: <Navigate to={"/posts"} />,
  },
]);

export default router;
