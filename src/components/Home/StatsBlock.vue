<template>
    <div class="server-status">
        <div class="server-status-text block-pad">
            Статистика сервера
        </div>
        <img  style="float: right; padding-right: 64px; padding-top: 28px;" src="images/icons/server-pie.png">
        <div class="server-status-online block-pad">
            <a style="font-size: 30px;"> {{ usersOnline }} </a> online users <a style="font-size: 30px;">  {{ banned }}  </a> banned users  <a style="font-size: 30px;"> {{ users }} </a> users<br>
            <a style="font-size: 30px;"> {{ scores }} </a> scores
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        props: ['onReady'],
        name: 'statsblock',
        data: function () {
            return {
                usersOnline: 0,
                banned: 0,
                users: 0,
                scores: "0",
            }
        },
        created: function(){
            this.initMethod();
        },
        methods:{
            initMethod: function(){
                var vm = this;
                vm.getStats("banned", (data) => vm.banned = data);
                vm.getStats("users",  function(data){
                    vm.users = data;
                    vm.getStats("online", function(data){ vm.usersOnline = data; vm.sendStats();});
                });
                vm.getStats("scores", (data) => vm.scores = data);
                
            },
            getStats: function(type, callback){
                axios.get("https://api.gatari.pw/stats/"+type)
                .then((response) => callback(response.data.result));
            },
            sendStats: function(){
                this.onReady({
                        usersOnline: this.usersOnline,
                        users: this.users
                    });
            }
        }
    }
</script>