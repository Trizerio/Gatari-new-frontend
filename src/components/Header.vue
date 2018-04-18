<template>
    
    <div class="header-bg">
        <div class="container">
                <div class="row navbar">
                <!-- Here start the header -->
                        <router-link tag="div" to="home" class="logo" >osu!gatari</router-link>      
                    <!-- menu -->
                <nav class="navbar navbar-expand-lg navbar-light ">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <router-link tag="a" to="leaderboard" class="nav-item nav-link" >{{ $t('header.leaderboard') }}</router-link>
                  <router-link tag="a" to="beatmaps" class="nav-item nav-link" >{{ $t('header.beatmaps') }}</router-link>
                            <input type="text" class="main-search" :placeholder="$t('header.search')" >
           
                <a href="#" class="login">      <img src="images/icons/login.png"  style="box-shadow: none !important; height: 16px; width: 16px;"> {{ $t('header.login') }}</a>
                </div>
              </div>
                </nav>
                <!-- menu ended -->
                </div>    
            </div>
        </div>
</template>

<script>
    export default {
        name: 'navbar'
    }
</script>