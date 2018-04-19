<template>
    <transition 
    enter-active-class="animated bounceInDown"
    leave-active-class="animated bounceOutUp">
        <div class="dropdown-login-bg">
            <div class="dropdown-login-content"> 
                    <div class="dropdown-login-stroke">{{ $t('login.title') }}</div>  
                    <input type="text" class="login-form" :placeholder="$t('login.login')">
                    <input type="text" class="login-form login-form-password" :placeholder="$t('login.password')">
                    <div class="login-forgot"> {{ $t('login.forgot') }} </div>
                    <button class="login-btn">
                            {{ $t('header.login') }}  <i class="fas fa-sign-in-alt login-icon"></i>
                    </button>
                </div>
                    <div class="login-registrate">
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
            </div>
    </transition>
</template>

<script>
        export default {
        name: 'login',
        data(){
            return{
            }
        }
    }
</script>