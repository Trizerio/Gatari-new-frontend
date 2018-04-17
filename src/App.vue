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
    if(window.languages[lang]){
        this.$i18n.locale = lang;
        console.log("got lang from cookie ! "+lang);
    }else{
      console.log("back to default (en)");
      this.$cookie.set('lang', "en"); 
    }
    window.language = window.languages[this.$cookie.get('lang')];
  }
}
</script>


