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
                        <a style="color: #b31b82;"> {{ users }} </a> пользователей <a style="color: #b31b82;"> {{ usersOnline }} </a> активных пользователя
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
                <div class="server-status">
                    <div class="server-status-text block-pad">
                        Статистика сервера
                    </div>
                    <img  style="float: right; padding-right: 64px; padding-top: 28px;" src="images/icons/server-pie.png">
                    <div class="server-status-online block-pad">
                        <a style="font-size: 30px;"> {{ usersOnline }} </a> online users <a style="font-size: 30px;">  {{ banned }}  </a> banned users  <a style="font-size: 30px;"> {{ users }} </a> users
                        <br>
                        <a style="font-size: 30px;"> {{ scores }} </a> scores
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="server-druzhban">
                    <div class="server-druzhban-head">
                        <div class="server-druzhban-text block-pad">
                            Лучшие дружбаны
                        </div>
                        <img  style="float: right; padding-right: 64px; padding-top: 30px;" src="images/icons/druzhban-fist.png">
                    </div>
                        <div class="server-druzhban-user-block">
                    <div class="server-druzhban-user">
                        <img src="images/icons/druzhban-avatar.png"  class="server-druzhban-avatar block-pad">
                        <a style="padding-left: 6px;">Memento mori</a>
                        <div class="druzhban-month"> 3 month</div>
                    </div>
                    <div class="server-druzhban-user">
                        <img src="images/icons/druzhban-avatar.png"  class="server-druzhban-avatar block-pad">
                        <a style="padding-left: 6px;">Memento mori</a>
                        <div class="druzhban-month"> 3 month</div>
                    </div>
                    <div class="server-druzhban-user">
                        <img src="images/icons/druzhban-avatar.png"  class="server-druzhban-avatar block-pad">
                        <a style="padding-left: 6px;">Memento mori</a>
                        <div class="druzhban-month"> 3 month</div>
                    </div>
                        </div>
            </div>
        </div>
        </div>
    </div>
    
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Home',
    data: function () {
        return {
            usersOnline: 0,
            banned: 0,
            users: 0,
            scores: "0"
        }
    },
    created: function(){
        this.initMethod();
    },
    methods:{
        initMethod: function(){
            var vm = this;
            vm.getStats("online", (data) => vm.usersOnline = data);
            vm.getStats("banned", (data) => vm.banned = data);
            vm.getStats("users",  (data) => vm.users = data);
            vm.getStats("scores", (data) => vm.scores = data);

        },
        getStats: function(type, callback){
            axios.get("https://api.gatari.pw/stats/"+type)
            .then(function(response){
                return callback(response.data.result);
            });
        }
    }

}

    </script>

