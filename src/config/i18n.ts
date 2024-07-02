import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import EnLocales from "../locales/en.json";
import IdLocales from "../locales/id.json";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // debug: import.meta.env.VITE_ENVIRONMENT === "local" ? true : false,
    fallbackLng: "en",
    resources: {
      en: {
        translation: EnLocales,
      },
      id: {
        translation: IdLocales,
      },
    },
  });
