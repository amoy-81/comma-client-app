import { Outlet } from "react-router-dom";
// import ScrollToTop from "../components/shared/scroll-to-top/ScrollToTop";

export default function MainLayout() {
  return (
    <div className="">
      {/* <ScrollToTop /> */}
      {/* <div className=" h-16" /> */}
      <Outlet />
      {/* <div className=" h-10" /> */}
    </div>
  );
}
