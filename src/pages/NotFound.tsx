import { useTranslation } from "react-i18next";

import notFoundImg from "@/assets/img/404.svg";

const NotFound = () => {
  /*======================== Props ======================== */

  const { t } = useTranslation();

  /*======================== Return ======================== */

  return (
    <div className="flex justify-center items-center flex-col w-full h-screen">
      <img src={notFoundImg} alt="not-found" className="w-[400px]" />
      <p className="text-lg font-bold mb-2 mt-8">{t("page-not-found")}</p>
    </div>
  );
};

export default NotFound;
