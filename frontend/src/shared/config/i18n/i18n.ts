import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import ru from './locales/ru/translation.json';
import es from './locales/es/translation.json';
import fr from './locales/fr/translation.json';
import tr from './locales/tr/translation.json';
import kz from './locales/kz/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      es: { translation: es },
      fr: { translation: fr },
      tr: { translation: tr },
      kz: { translation: kz },
    },
    fallbackLng: 'en',
    lng: 'en', // default
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'listnest-language',
    },
  });

export default i18n; 