import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import enLocale from '@/locales/en'
Vue.use(VueI18n)
Vue.use(VueRouter)


const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages: {"en" : enLocale}
})

const loadedLanguages = ["en"] // our default language that is prelaoded 

function setI18nLanguage (lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

function loadLanguageAsync (lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(`@/locales/${lang}`).then(msgs => {
        i18n.setLocaleMessage(lang, msgs)
        loadedLanguages.push(lang)
        return setI18nLanguage(lang)
      })
    } 
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}
loadLanguageAsync("ru");

Vue.config.productionTip = false
var router = new VueRouter({
  routes: [
    {
      redirect: '/home',
      path: '/'
    },
    {
      path: '/home',
      name: 'index',
      component: Home
    }
  ]
})

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
});

