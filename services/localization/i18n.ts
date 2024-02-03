import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en.json';
import esTranslation from './es.json';

const userLanguage = getLocales()[0]?.languageCode;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    es: { translation: esTranslation },
    en: { translation: enTranslation },
  },
  lng: userLanguage || 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: true, // Allows including variables in translations
  },
});

export default i18n;
