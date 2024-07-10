import { useTranslation } from "react-i18next";

// import useDummyStore from "@/store/dummy/iDummyStore";

const useHome = () => {
  /*======================== Props ======================== */

  // const { loadData: loadDummy } = useDummyStore();
  const { i18n } = useTranslation();

  /*======================== Handler ======================== */

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  // const handleLoadDummy = async () => {
  //   await loadDummy();
  // };

  /*======================== Return ======================== */

  return {
    handleChangeLanguage,
  };
};

export default useHome;
