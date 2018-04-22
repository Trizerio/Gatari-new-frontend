import enLocale from '@/locales/en'
import ruLocale from '@/locales/ru'
export var locales = {
    "en" : enLocale,
    "ru" : ruLocale
  };


window.languages = {
  "en":{
    "name": "English",
    "flag": "us"
  },
  "ru":{
    "name": "Русский",
    "flag": "ru"
  }
};
window.language = window.languages["en"];

