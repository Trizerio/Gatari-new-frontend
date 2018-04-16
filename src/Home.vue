<template>
<div id="home">
    <div class="container">
        <div class="row"> 
            <div class="col"> 
                <div class="main-block">
                    <div class="main-block-gatari block-pad"> osu!gatari </div>
                    <div class="main-block-gatari2 block-pad">
                    Приватный осу сервер с адекватными игроками <br>
                    и хорошей администрацией
                    </div>
                    <div class="main-block-gatari3 block-pad">
                        <a class="users-count"> {{ users }}</a> пользователей <a class="users-count"> {{ usersOnline }}</a> активных пользователя
                    </div>
                    <button class="main-block-registration">
                        регистрация
                    </button>
                </div>                                
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row"> 
            <div class="col">
                <div class="info-block"> 
                    <div class="info-text block-pad" >Почему gatari?</div>
                    <div class="info-text2 block-pad">
                    Рандомный текст,я не знаю что писать<br>
                    диггер красав в общем сервер класс всем <br>
                    советую или бан вот кароче<br>
                    купите дружбана<br>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col">
                <statsblock :onReady='onReady'/>
            </div>
            <div class="col">
                <donorblock/>
        </div>
        </div>
    </div>
    
</div>
</template>

<script>
import donorblock from './components/Home/DonorBlock.vue'
import statsblock from './components/Home/StatsBlock.vue'
export default {
    name: 'Home',
    components: {
        donorblock,
        statsblock
    },
    data:()=>{
        return{
            users: 0,
            usersOnline: 0
        }
    },
    methods:{
        onReady(data){
            this.users = data.users;
            this.usersOnline = data.usersOnline;
        }
    }

}

    </script>

