<template>
    <transition 
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOutUp">
        <div @click="user = {}" :class="'dropdown-login-bg'+(!user && error ? ' error' : '')">
            <transition 
                enter-active-class="animated fadeInDown"
                leave-active-class="animated fadeOutUp">
            <div v-if="!user && error" class="login-error">{{ error }}</div>
            </transition>   
            <div class="dropdown-login-content"> 
                    <div class="dropdown-login-stroke">{{ $t('login.title') }}</div>  
                    <form>
                        <input autocomplete="off" v-model="login" type="text" class="login-form" :placeholder="$t('login.login')">
                        <input autocomplete="off" v-model="password" type="password" class="login-form login-form-password" :placeholder="$t('login.password')">
                    </form>
                    <div class="login-forgot"> {{ $t('login.forgot') }} </div>
                    <button @click="auth" :class="'login-btn'+(login == '' || password == '' ? ' disabled' : '')">
                            {{ $t('header.login') }}  <i class="fas fa-sign-in-alt login-icon"></i>
                    </button>
                </div>
                <transition 
            enter-active-class="animated flipInX"
            leave-active-class="animated flipOutX">
            <div v-if="login == '' && password == ''" class="login-registrate">
                <div class="dropdown-login-content"> 
                <div class="login-registrate-stroke1">
                        {{ $t('login.sub.title') }}
                </div>
                <div class="login-registrate-stroke2">
                        {{ $t('login.sub.sub') }}       
                </div>
                <button class="registrate-login-block-btn">
                        {{ $t('misc.registration') }}  <i class="fa fa-key login-icon"></i>
                    </button>
                </div>
            </div>   
            </transition>
            </div>
              
    </transition>
</template>

<script>
        export default {
        props: ['onLogin'],
        name: 'login',
        data(){
            return{
                login:"",
                password:"",
                user:{},
                error: ""
                
            }
        },
        methods:{
            auth: function(){
                var vm = this;
                if(vm.login == '' || vm.password == '') return;
                this.$axios.get("https://api.gatari.pw/user/auth",{params:{"u":vm.login,"p":vm.password}})
                .then(function(response){
                    if(response.data.code != 200){
                        vm.user = null;
                        vm.error = response.data.code;
                        setTimeout(()=>vm.user = {}, 2500);
                        return;
                    }
                    vm.user = response.data.user;
                    vm.onLogin({
                        user: vm.user
                    });
                    vm.$parent.loginForm = false;
                })
                .catch(function(e){
                    console.log(e);
                    vm.user = null;
                    vm.error = 500;
                });
                
            }
        }
    }
</script>