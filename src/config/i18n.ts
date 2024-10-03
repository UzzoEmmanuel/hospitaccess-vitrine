import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { i18nLangsEnabled } from './i18nLangsEnabled';

const supportedLangs = [];
for (const language of i18nLangsEnabled) {
  supportedLangs.push(language.codeIso);
}

i18next
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    supportedLngs: supportedLangs,
    interpolation: {
      escapeValue: false,
    },
    ns: 'common',
    fallbackNS: 'common',
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
  })
  .then();

export default i18next;
