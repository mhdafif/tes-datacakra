import { useEffect, useState } from "react";

// import useGlobalStore from "@/store/global/GlobalStore";

const useLayout = () => {
  /*======================== Props ======================== */

  /*======================== UseState ======================== */

  const [isVisibleScrollToTop, setIsVisibleScrollToTop] = useState(false);

  /*======================== Store ======================== */

  // const { setupInterceptor, setSetupInterceptor } = useGlobalStore();

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

  /*======================== Others ======================== */

  // if (!setupInterceptor) {
  //   // setup(navigate, location);
  //   setup();
  //   setSetupInterceptor();
  // }

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
  };
};

export default useLayout;
