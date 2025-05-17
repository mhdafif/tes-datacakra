import { useLocation, useNavigate } from "react-router-dom";

import { EPath } from "@/router/useRouter";

import useUserStore from "@/store/user/userStore";

const useMenu = () => {
  /*======================== Props ======================== */

  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  /*======================== Store ======================== */

  const logout = useUserStore((state) => state.logout);

  /*======================== Handler ======================== */

  const handleLogout = () => {
    logout();
    navigate(EPath.auth);
  };

  /*======================== Others ======================== */

  /*======================== Return ======================== */

  return {
    pathname,
    handleLogout,
  };
};

export default useMenu;
