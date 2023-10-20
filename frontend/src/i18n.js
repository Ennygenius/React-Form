// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Application Form": "Application Form",
          // Add more translations for English here
        },
      },
      // Add translations for other supported languages here
    },
    lng: "en", // Set the default language
    fallbackLng: "en", // Fallback to English if a translation doesn't exist
    debug: true, // Enable debug mode for development
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
