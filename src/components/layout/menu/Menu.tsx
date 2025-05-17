import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import useMenu from "./useMenu";

const Menu = () => {
  /*======================== Props ======================== */

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { handleLogout } = useMenu();

  /*======================== Return ======================== */

  return (
    <div className="justify-between items-center gap-4 *:py-4 *:px-6 bg-darkNavy text-offWhite rounded-10 sticky z-10 top-4 shadow-lg mb-4 hidden laptop:flex">
      <span
        className="text-2xl font-bold cursor-pointer transition-all hover:text-darkBlue"
        onClick={() => navigate("/")}
      >
        {t("menu.home")}
      </span>
      <div className="flex items-center gap-6">
        <span
          className="uppercase text-lg font-semibold cursor-pointer hover:text-darkBlue transition-all"
          onClick={() => navigate("/articles")}
        >
          {t("menu.articles")}
        </span>
        <span
          className="uppercase text-lg font-semibold cursor-pointer hover:text-darkBlue transition-all border-r border-solid border-offWhite pr-6"
          onClick={() => navigate("/category")}
        >
          {t("menu.category")}
        </span>
        <span
          className="uppercase text-lg font-semibold cursor-pointer hover:text-darkBlue transition-all"
          onClick={handleLogout}
        >
          {t("auth.logout")}
        </span>
      </div>
    </div>
  );
};

export default Menu;
