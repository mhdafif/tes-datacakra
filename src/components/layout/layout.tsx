import { Outlet } from "react-router-dom";

import { Toaster } from "../ui/toaster";
import UvNotif from "../uv/uvNotif";
import Menu from "./menu/Menu";
import MenuMobile from "./menu/MenuMobile";
import useLayout from "./useLayout";

const Layout = () => {
  /*======================== Props ======================== */

  const { getUser } = useLayout();

  /*======================== Return ======================== */

  return (
    <div>
      <div className="relative bg-lightGray">
        <div className="w-full h-full min-w-[100dvw] min-h-dvh container pt-6 pb-16 laptop:pb-6">
          {getUser("token") && <Menu />}
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>

      <MenuMobile />

      <Toaster />
      <UvNotif />

      {/* Scroll Top */}
      {/* {isVisibleScrollToTop && (
        <div
          className="block laptop:!hidden go-top fixed bottom-6 right-6 bg-uvgreen rounded-5 p-1 cursor-pointer z-5"
          onClick={scrollToTop}
        >
          <img src={arrowIcon} className="w-6 rotate-180" />
        </div>
      )} */}
    </div>
  );
};

export default Layout;
