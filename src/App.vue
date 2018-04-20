<template>
  <div id="app">
  <navbar/>
  <router-view/>
  <footerblock/>
  </div>
</template>

<script>
import footerblock from './components/Footer.vue'
import navbar from './components/Header.vue'

export default {
  name: 'app',
  components: {
    footerblock,
    navbar
  },
  created(){
    var lang = this.$cookie.get('lang');
    this.setLocale(lang);
    if(!this.$session.exists()){
      console.log("we don't have any sessions, start new");
      this.$session.start();
    }else{
      console.log('we have a some session, wow!');
    }
  }
}
</script>


