import Vue from 'vue'
import App from '@/App.vue'
import Home from '@/pages/Home.vue'
import Beatmaps from '@/pages/Beatmaps.vue'
import VueRouter from 'vue-router'
import VueCookie from 'vue-cookie'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import {locales} from "@/locales/locale"
import VueSession from 'vue-session'
import Leaderboard from '@/pages/Leaderboard.vue'
import Registration from '@/pages/Registration.vue'
import {localeMixin} from "@/mixins/locale"
import {authMixin} from "@/mixins/auth"
Vue.prototype.$axios = axios;
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueCookie);
Vue.mixin(localeMixin); 
Vue.mixin(authMixin); 
Vue.use(VueSession,{persist: true});
 const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages: locales
});





Vue.config.productionTip = false;
var router = new VueRouter({
  mode: 'history',
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
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: Leaderboard
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
      meta: { auth: false }
    },
    { path: '*', redirect: '/home' }
  ]
})

router.beforeEach((to, from, next) => {
  //console.log(to.matched[0].meta);
  var token = Vue.prototype.$session.get('token');
  if (to.matched.some(record => record.meta.auth != undefined)) {
    var auth = to.matched[0].meta.auth;
    if (!token && auth || token && !auth) {
      next({
        path: '/home'
      });
      return;
    }
  } 
    next() 
  
})

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
});

