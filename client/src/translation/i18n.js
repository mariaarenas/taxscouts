import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// languages
import { en } from "./languages/english";
import { sp } from "./languages/spanish";

export const languages = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Espanol",
    value: "sp",
  },
];

const resources = {
  en: {
    translation: en,
  },
  sp: {
    translation: sp,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  lng: "en",
  resources: resources,
});
export default i18n;
