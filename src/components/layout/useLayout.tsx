import { useEffect, useState } from "react";

import useUserStore from "@/store/user/userStore";

const useLayout = () => {
  /*======================== UseState ======================== */

  const [isVisibleScrollToTop, setIsVisibleScrollToTop] = useState(false);
  const getUser = useUserStore((state) => state.getState);

  /*======================== Handler ======================== */

  // Function to detect scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisibleScrollToTop(true);
    } else {
      setIsVisibleScrollToTop(false);
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /*======================== UseEffect ======================== */

  // Adding event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  /*======================== Return ======================== */

  return {
    isVisibleScrollToTop,
    scrollToTop,
    getUser,
  };
};

export default useLayout;
