import useHome from "@/modules/home/useHome";
import { useTranslation } from "react-i18next";

import useGlobalStore from "@/store/global/globalStore";

const Home = () => {
  /*======================== Props ======================== */

  const { t, i18n } = useTranslation();
  const { handleChangeLanguage } = useHome();

  /*======================== Store ======================== */

  const { loading } = useGlobalStore();

  /*======================== Form ======================== */

  /*======================== UseState ======================== */

  /*======================== Handler ======================== */

  /*======================== UseEffect ======================== */

  /*======================== Others ======================== */

  /*======================== Return ======================== */

  return (
    <div>
      {loading && <div>loading...</div>}
      THIS IS {t("home")}
      <div className="">
        <div
          className={`cursor-pointer p-3 w-52 ${
            i18n.resolvedLanguage === "en" ? "bg-uvgreen !text-white" : ""
          }`}
          onClick={() => handleChangeLanguage("en")}
        >
          <div className="mr-1">English</div>
        </div>
        <div
          className={`cursor-pointer p-3 w-52 ${
            i18n.resolvedLanguage === "id" ? "bg-uvgreen !text-white" : ""
          }`}
          onClick={() => handleChangeLanguage("id")}
        >
          <div className="mr-1">Bahasa</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
