import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esTranslations from "./locales/es.json";

const resources = {
  es: {
    translation: esTranslations,
  },
};

i18n.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "es",
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
