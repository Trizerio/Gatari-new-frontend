import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
  render: h => h(App)
});
