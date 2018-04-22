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
                    <button @click="LoginAttempt" :class="'login-btn'+(login == '' || password == '' || (!user && error) ? ' disabled' : '')">
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
                <router-link @click.native="closeForm" tag="button" to="registration" class="registrate-login-block-btn" >
                    {{ $t('misc.registration') }}  <i class="fa fa-key login-icon"></i>
                </router-link>
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
                error: ""
                
            }
        },
        methods:{
            LoginAttempt: function(){
                var vm = this;
                vm.auth(vm.login, vm.password, function(result){
                    if(result.code == 200){
                        vm.$parent.loginForm = false;
                        vm.onLogin({
                            user: result.user
                        });
                    }else{
                        vm.user = null;
                        setTimeout(()=>vm.user = {}, 2500);
                        vm.error = result.code;
                    }
                });
            },
            closeForm:function(){
                this.$parent.loginForm = false;
            }
        }
    }
</script>