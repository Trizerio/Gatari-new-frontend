<template>
       
    <div id="registration"> 
            <link rel="stylesheet" href="css/pages/registration.css">
        <!-- <div class="container">
            <div class="row">
                <div class="col">
                    <div class="registration-banner">
                        <div class="registration-banner-stroke block-pad">
                            Registration
                        </div>
                        <div class="registration-banner-stroke2 block-pad">
                            Feel free to registrate on our server!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    -->
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="registration-bg">
                        
                            <div class="registration-block-header">
                                <div class="registration-block-stroke ">
                                    Введите свои данные
                                </div>
                                <div class="registration-block-stroke2">
                                    Надеюсь вы прихватили с собой свой ключ!
                                </div>
                             </div>
                             <div class="col-lg-6">
                            <div class="reg-form-block block-pad">
                            <div class="reg-form-single"> username <input type="text" class="registration-form"> </div>
                            <div class="reg-form-single">password<input type="text" class="registration-form"> </div>
                            <div class="reg-form-single">repeat password<input type="text" class="registration-form"> </div>  
                            <div class="reg-form-single">e-mail <input type="text" class="registration-form"> </div>
                            <div class="reg-form-single">beta key<input type="text" class="registration-form">  </div>
                            <button class="registration-reg-btn">
                                    Registrate
                             </button>
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
    name: 'Registration',
    data(){
        return {
            registration:{}
        }
    },
    }
</script>