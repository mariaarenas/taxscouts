import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// languages
import { eng } from "./languages/english";
import { spa } from "./languages/spanish";

export const languages = [
  {
    label: "English",
    value: "eng",
  },
  {
    label: "Espanol",
    value: "spa",
  },
];

const resources = {
  eng: {
    translation: eng,
  },
  spa: {
    translation: spa,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  lng: "eng",
  resources: resources,
});
export default i18n;
