import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {en, jp} from './resources';
import { extractObjectPath } from './utils';
import {LOCALSTORAGE} from "../utils/constant";

const DEFAULT_LANGUAGE = (localStorage.getItem(LOCALSTORAGE.LANG) && localStorage.getItem(LOCALSTORAGE.LANG) === 'jp') ? 'jp' : 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en
    },
    jp: {
      translation: jp
    }
  },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  keySeparator: '.',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

export const tkeys = extractObjectPath({ ...en });
