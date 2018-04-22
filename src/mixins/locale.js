export var localeMixin = {
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
