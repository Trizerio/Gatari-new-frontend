import Vue from 'vue'
import App from '@/App.vue'
import Home from '@/pages/Home.vue'
import Beatmaps from '@/pages/Beatmaps.vue'
import VueRouter from 'vue-router'
import VueCookie from 'vue-cookie'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import {mixin, locales} from "@/locales/locale"

Vue.prototype.$axios = axios;
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueCookie);
Vue.mixin(mixin); 

 const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages: locales
});

Vue.config.productionTip = false;
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
    },
    {
      path: '/beatmaps',
      name: 'beatmaps',
      component: Beatmaps
    }
  ]
})

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
});

