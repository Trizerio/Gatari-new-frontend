<template>
    <div id="leaderboard">
        <link rel="stylesheet" href="css/pages/leaderboard.css">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="leaderboard-banner">
                        <div class="leaderboard-banner-stroke block-pad">
                            Leaderboard
                        </div>
                        <div class="leaderboard-banner-stroke2 block-pad"> 
                                Соревнуйся с остальными игроками сервера и наблюдай за 
                                статистикой.
                        </div>
                        <div class="leaderboard-banner-swtich1 block-pad">
                            Perfomance Points
                        </div>
                        <div class="leaderboard-banner-swtich2 ">
                                Score
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    
                    <div class="leaderboard-main-bg">
                        
                        <table class="leaderboard-table">
                            <thead class="leadeboard-column-padding">
                                <tr>
                                    <th class="ranking-page-table__heading"> </th>
                                    <th class="ranking-page-table__heading ranking-page-table__heading--main"></th>
                                    <th class="ranking-page-table__heading"> Accuracy </th>
                                    <th class="ranking-page-table__heading table__heading--selected"> PP </th>
                                    <th class="ranking-page-table__heading"> Playcount </th>
                                    <th class="ranking-page-table__heading"> Level </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in leaderboard" class="leaderboard-column">
                                    <td class="ranking-page-table__column leaderboard-column-player-rank">#{{ index+1 }} </td>
                                    <td class="ranking-page-table__column leaderboard-column-player-name">
                                         <img :src="'images/flags/'+user.country+'.png'" class="leaderboard-player-flag"><a target="_blank" :href="'https://osu.gatari.pw/u/'+user.user">[{{ user.clan.abbr }}] {{ user.username }}</a>
                                    </td>
                                    <td class="ranking-page-table__column ranking-page-table__column--dimmed">{{ user.accuracy.toFixed(2) }}% </td>
                                    <td class="ranking-page-table__column">{{ user.pp }} </td>
                                    <td class="ranking-page-table__column ranking-page-table__column--dimmed">{{ user.playcount }} </td>
                                    <td class="ranking-page-table__column ranking-page-table__column--dimmed">{{ user.level }} </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="paginator">
                            <a><i class="fas fa-angle-double-left paginator-page  paginator-icon"></i></a>
                            <a><i class="fas fa-angle-left paginator-page  paginator-icon"></i></a>

                            <a class="paginator-page" style="color: #fc2;"> 1 </a>
                            <a class="paginator-page"> 2 </a>
                            <a class="paginator-page"> 3 </a>
                            <a class="paginator-page"> 4 </a>
                            <a class="paginator-page"> 5 </a>
                            <a class="paginator-page"> 6 </a>
                            <a class="paginator-page"> 7 </a>

                            <a><i class="fas fa-angle-right paginator-page  paginator-icon"></i></a>
                            <a><i class="fas fa-angle-double-right paginator-page paginator-icon"></i> </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

</template>
<script>  
    export default {
    name: 'Leaderboard',
    data(){
        return {
            leaderboard:{}
        }
    },
    created(){
        var vm = this;
        this.$axios.get("http://api.gatari.pw/leaderboard")
        .then(function(response){
            vm.leaderboard = response.data.leaderboard;
        });
    }
    }
</script>