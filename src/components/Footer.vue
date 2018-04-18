<template>
<div class="footer-bg">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="footer-info-block">
                                <a class="footer-title">Помощь</a>
                                <ul>
                                  <li><a href='#'>Как начать игру</a></li>
                                  <li><a href='#'>Лаунчер</a></li>
                                  <li><a href='#'>Гайды от диггера</a></li>
                                  <li><a href='#'>Кулсторибоб</a></li>
                                </ul>
                            </div>
                             <div class="footer-info-block">
                                <a class="footer-title">Помощь</a>
                                <ul>
                                  <li><a href='#'>Как начать игру</a></li>
                                  <li><a href='#'>Лаунчер</a></li>
                                  <li><a href='#'>Гайды от диггера</a></li>
                                  <li><a href='#'>Кулсторибоб</a></li>
                                </ul>
                            </div>
                             <div class="footer-info-block">
                                <a class="footer-title">Помощь</a>
                                <ul>
                                  <li><a href='#'>Как начать игру</a></li>
                                  <li><a href='#'>Лаунчер</a></li>
                                  <li><a href='#'>Гайды от диггера</a></li>
                                  <li><a href='#'>Кулсторибоб</a></li>
                                </ul>
                            </div>
                             <div class="footer-logo">
                                 <span>osu!gatari</span>
                                 <br>
                                 <a class="subtitle"> {{ $t('footer.subtitle') }}</a>
                                 <div class="dropup dropup-language">
                                    <div class="language">   

                                     {{ $t('misc.language') }} 
                                     <img :src="'/images/flags/'+toUpper(window().language.flag)+'.png'" class="dropup-flags">

                                    </div>
                                         <div class="dropup-content">
                                             <ul>
                                                <li v-for="(lang, locale) in window().languages" :key="locale" @click="setLocale(locale)" class="language-select">
                                                    {{ lang.name }}
                                                    <img :src="'/images/flags/'+toUpper(lang.flag)+'.png'" class="dropup-flags">
                                                 </li>
                                            </ul>
                                         </div>
                                   </div>                                  
                            </div>
                            
            
                        </div>
                    </div>
                    
                </div>
            </div>
</template>

<script>
export default {
  name: 'FooterBlock',
  methods:{
     toUpper(text){
         return text.toUpperCase();
     }
  }
}
</script>