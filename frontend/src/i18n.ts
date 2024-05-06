import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

import de from "./locales/de/translation.json";
import en from "./locales/en/translation.json";
import it from "./locales/it/translation.json";

if (localStorage.getItem("i18nextLng") === null) {
  localStorage.setItem("i18nextLng", "it");
}

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,  // Not needed for react as it escapes by default
      },
      resources: {
        en: {
          translation: en
        },
        de: {
          translation: de
        },
        it: {
          translation: it
        }
      }
    });
