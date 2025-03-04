import {
  // queryAddDummy,
  queryLoadDummy,
  // queryUpdateDummy,
} from "@/queries/dummy/dummyQueries";
import { useTranslation } from "react-i18next";

const useHome = () => {
  /*======================== Props ======================== */

  const { i18n } = useTranslation();

  /*======================== Queries ======================== */

  const { data, isLoading } = queryLoadDummy();
  // const { mutateAsync: addDummy, isPending: isLoading } = queryAddDummy();
  // const { mutateAsync: updateDummy, isPending: isLoading } = queryUpdateDummy();

  /*======================== Handler ======================== */

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  /*======================== Return ======================== */

  return {
    data,
    isLoading,
    handleChangeLanguage,
  };
};

export default useHome;
