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
                            </div>
                        
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
    
            <div class="dropdown-login-bg">
                <div class="dropdown-login-content"> 
                        <div class="dropdown-login-stroke">Login</div>  
                        <input type="text" class="login-form" placeholder="login">
                        <input type="text" class="login-form login-form-password" placeholder="password">
                        <div class="login-forgot"> I forgot my password </div>
                        <button class="login-btn">
                            Login  <i class="fa fa-sign-in login-icon"></i>
                        </button>
                    </div>
                        <div class="login-registrate">
                            <div class="dropdown-login-content"> 
                            <div class="login-registrate-stroke1">
                                You dont have account yet?
                            </div>
                            <div class="login-registrate-stroke2">
                                    Feel free to registrate on our server!       
                            </div>
                            <button class="registrate-login-block-btn">
                                    Registrate  <i class="fa fa-key login-icon"></i>
                                </button>
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