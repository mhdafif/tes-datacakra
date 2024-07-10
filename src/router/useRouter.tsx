import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "@/pages/Home";

import useGlobalStore from "@/store/global/globalStore";

export enum EPath {
  home = "/",
}

interface IRoutes {
  index?: boolean;
  children?: IRoutes[];
  path: string | EPath;
  element: JSX.Element;
  title: string;
}

const useRouter = () => {
  /*======================== Props ======================== */

  const { pathname } = useLocation();
  // const navigate = useNavigate();
  const { loading, setLoading } = useGlobalStore();

  /*======================== Handler ======================== */

  // const handlePageNeedToken = () => {
  //   if (!user?.token) {
  //     switch (true) {
  //       case pathname.startsWith(EPath.order):
  //       case pathname.startsWith(EPath.report):
  //       case pathname === EPath.historyTopUp:
  //       case pathname === EPath.notification:
  //       case pathname === EPath.cart:
  //         return true;
  //       default:
  //         return false;
  //     }
  //   } else {
  //     switch (true) {
  //       case pathname.startsWith(EPath.order):
  //         return user?.access_api !== "No";
  //       default:
  //         return false;
  //     }
  //   }
  // };

  /*======================== UseEffect ======================== */

  useEffect(() => {
    window.scrollTo(0, 0);
    // redirect to home
    // if (handlePageNeedToken()) {
    //   navigate("/");
    // }
  }, [pathname]);

  useEffect(() => {
    // to reset loading if somehow when login or something(api request) stuck the loading as true
    if (loading) {
      setLoading(false);
    }
  }, []);

  /*======================== Others ======================== */

  const routes: IRoutes[] = [
    {
      path: EPath.home,
      element: <Home />,
      title: "menu.dashboard",
    },
  ];

  /*======================== Return ======================== */

  return {
    routes,
  };
};

export default useRouter;
