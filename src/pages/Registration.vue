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
                                    <div class="reg-form-block block-pad"><label class="account-edit-entry" data-password-field="password">
                                            <input class="registration-form" type="text" required="">
                                            <div class="account-edit-entry__label">username</div>      
                                        </label> <label class="account-edit-entry" data-password-field="password">
                                            <input class="registration-form" type="text" required="">
                                            <div class="account-edit-entry__label">password</div>            
                                        </label> <label class="account-edit-entry" data-password-field="password">
                                            <input class="registration-form" type="text" required="">
                                            <div class="account-edit-entry__label">repeat password</div>   
                                        </label> <label class="account-edit-entry" data-password-field="password">
                                            <input class="registration-form" type="text" required="">
                                            <div class="account-edit-entry__label">e-mail</div>
                                        </label> <div class="reg-form-single"><label class="account-edit-entry" data-password-field="password">
                                            <input class="registration-form" type="text" required="">
                                            <div class="account-edit-entry__label">beta key</div>
                                        </label></div> <button class="registration-reg-btn">
                                                            Registrate <i class="fas fa-user-plus registration-reg-btn-icon"></i>

                                                
                                                     </button></div>
                            
                        </div>  
                        <div class="col-lg-6">
                            <div class="registration-info-stroke">
                                Мы вам будем очень благодарны если вы 
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