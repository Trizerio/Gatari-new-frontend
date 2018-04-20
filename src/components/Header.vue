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
                       
                                <a v-if="!user" @click="loginForm = !loginForm" href="#" class="login">      <span class="icon-shadow login-header-icon"></span> 
                                    {{ $t('header.login') }}</a>
                                <a v-else href="#" class="header-avatar" :style="'background-image:url(https://a.gatari.pw/'+user.userid+');'"></a>
    
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
            loginForm: false,
            user: null
            }
        },
        components:{
            login
        },
        created(){
            var username = this.$session.get('username');
            var userid = this.$session.get('userid');
            var token = this.$session.get('token');
            if(username && userid && token && username != "" && Number(userid) > 999 && token != "" && token.length == 32){ 
                console.log('here we go!');
                this.user = {'token':token,'userid':userid,'username':username};
            }
        },
        methods:{
            onLogin: function(data){
                console.log(data);
                this.$session.set('username',data.user.username);
                this.$session.set('userid', data.user.userid);
                this.$session.set('token', data.user.token);
                this.user = data.user;
            }
        }
    }
</script>