import { Outlet } from "react-router-dom";

import useLayout from "./useLayout";

import arrowIcon from "@/assets/icon/arrow-white.svg";

const Layout = () => {
  /*======================== Props ======================== */

  const { isVisibleScrollToTop, scrollToTop } = useLayout();

  /*======================== Return ======================== */

  return (
    <div>
      <div className="relative w-full h-full">
        <div className="bg-white laptop:bg-whitef8">
          <Outlet />
        </div>
      </div>

      {/* Scroll Top */}
      {isVisibleScrollToTop && (
        <div
          className="block laptop:!hidden go-top fixed bottom-6 right-6 bg-uvgreen rounded-5 p-1 cursor-pointer z-5"
          onClick={scrollToTop}
        >
          <img src={arrowIcon} className="w-6 rotate-180" />
        </div>
      )}
    </div>
  );
};

export default Layout;
