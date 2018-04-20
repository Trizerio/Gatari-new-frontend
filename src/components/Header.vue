<template>
    
    <div class="header-bg">
        <div class="container">
                <div class="row navbar">
                <!-- Here start the header -->
                        <router-link tag="div" to="home" class="logo" >osu!gatari</router-link>      
                    <!-- menu -->
        <div class="header-menu">
                <nav class="navbar navbar-expand-lg navbar-light"> 
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <router-link tag="a" to="leaderboard" class="nav-item nav-link" >{{ $t('header.leaderboard') }}</router-link>
                    <router-link tag="a" to="beatmaps" class="nav-item nav-link" >{{ $t('header.beatmaps') }}</router-link>
                                <input type="text" class="main-search" :placeholder="$t('header.search')" >
                       
                                <a @click="loginForm = !loginForm" href="#" class="login">      <span class="icon-shadow login-header-icon"></span> 
                                    {{ $t('header.login') }}</a>
    
                        </div>
                           
                    </div>
                </nav>
            </div>
                <!-- menu ended -->
                </div>    
            </div>
            <div class="container flex-dropdown">
                <login :onLogin="onLogin" v-if="loginForm"/>
        </div>
        </div>
</template>

<script>
    import login from '@/components/Login.vue'
    export default {
        name: 'navbar',
        data(){
            return{
            loginForm: false
            }
        },
        components:{
            login
        },
        methods:{
            onLogin: function(data){
                console.log(data);
            }
        }
    }
</script>