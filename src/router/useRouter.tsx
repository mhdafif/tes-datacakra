import { JSX, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Category from "@/pages/Category";
import Dashboard from "@/pages/Home";
import ArticleDetail from "@/pages/articles/Detail";
import Articles from "@/pages/articles/Index";

import useGlobalStore from "@/store/global/globalStore";
import useUserStore from "@/store/user/userStore";

export enum EPath {
  auth = "/auth",
  home = "/",
  category = "/category",
  articles = "/articles",
  articleDetail = "/articles/:id",
}

interface IRoutes {
  index?: boolean;
  children?: IRoutes[];
  path: string | EPath;
  element: JSX.Element;
}

const useRouter = () => {
  /*======================== Props ======================== */

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const loading = useGlobalStore((state) => state.loading);
  const resetGlobalState = useGlobalStore((state) => state.resetState);

  /*======================== Store ======================== */

  const getUser = useUserStore((state) => state.getState);

  /*======================== Handler ======================== */

  const handlePageNeedToken = () => {
    if (!getUser("token")) {
      switch (true) {
        case pathname === EPath.home:
        case pathname === EPath.category:
        case pathname.includes(EPath.articles):
          return true;
        default:
          return false;
      }
    }
    return false;
  };

  /*======================== UseEffect ======================== */

  useEffect(() => {
    window.scrollTo(0, 0);
    // redirect to home
    if (handlePageNeedToken()) {
      navigate(EPath.auth);
    }
  }, [pathname]);

  useEffect(() => {
    // to reset loading if somehow when login or something(api request) stuck the loading as true
    if (loading) {
      resetGlobalState("loading");
    }
  }, []);

  /*======================== Others ======================== */

  const routes: IRoutes[] = [
    {
      path: EPath.home,
      element: <Dashboard />,
    },
    {
      path: EPath.category,
      element: <Category />,
    },
    {
      path: EPath.articles,
      element: <Articles />,
    },
    {
      path: EPath.articleDetail,
      element: <ArticleDetail />,
    },
  ];

  /*======================== Return ======================== */

  return {
    routes,
  };
};

export default useRouter;
