import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import VueRouter from 'vue-router'
import VueCookie from 'vue-cookie'
import VueI18n from 'vue-i18n'
import enLocale from '@/locales/en'
import ruLocale from '@/locales/ru'
Vue.use(VueI18n)
Vue.use(VueRouter)
Vue.use(VueCookie)

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages: {
    "en" : enLocale,
    "ru" : ruLocale
  }
});

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

