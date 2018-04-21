<template>
    <div id="leaderboard">
        <link rel="stylesheet" href="css/leaderboard.css">
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
                                    <th class=""> </th>
                                    <th class=""></th>
                                    <th class=""> Accuracy </th>
                                    <th class=""> PP </th>
                                    <th class=""> Playcount </th>
                                    <th class=""> Level </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="leaderboard-column">
                                    <td class="leaderboard-column-player-rank">#1 </td>
                                    <td class="leaderboard-column-player-name">
                                         <img src="images/flags/ru.png" class="leaderboard-player-flag"> 
                                         halfy
                                    </td>
                                    <td class="leaderboard-column-player-opacity">125 </td>
                                    <td class="">32425 </td>
                                    <td class="leaderboard-column-player-opacity">3254 </td>
                                    <td class="leaderboard-column-player-opacity">13 </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>  
    export default {
    name: 'Leaderboard',
    }
</script>