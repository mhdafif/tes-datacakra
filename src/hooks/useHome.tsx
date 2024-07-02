import { useTranslation } from "react-i18next";

const useHome = () => {
  /*======================== Props ======================== */

  const { i18n } = useTranslation();

  /*======================== Handler ======================== */

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  /*======================== Return ======================== */

  return {
    handleChangeLanguage,
  };
};

export default useHome;
