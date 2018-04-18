import enLocale from '@/locales/en'
import ruLocale from '@/locales/ru'
export var locales = {
    "en" : enLocale,
    "ru" : ruLocale
  };

export const mixin = {
  methods: {
    window: function () {
      return window;
    },
    setLocale: function(lang){
      if(window.languages[lang] && this.$i18n.locale != lang ){
        this.$cookie.set('lang', lang);
        window.language = window.languages[lang];
        this.$i18n.locale = lang;
        console.log("selected new language: "+lang);
      }
  }
  }
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

