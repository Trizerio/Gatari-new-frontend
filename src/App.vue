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
  }
}
</script>


