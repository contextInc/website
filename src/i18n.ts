import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import JA from '../public/locales/ja/translation.json';
// import EN from '../public/locales/en/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: ['en', 'ja'],
    fallbackLng: ['ja'],
    resources: {
      ja: {
        translation: JA,
      },
      // en: {
      //   translation: EN,
      // },
    },
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v4',
  });

export default i18n;