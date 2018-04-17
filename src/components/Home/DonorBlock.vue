<template>
    <div class="server-druzhban">
        <div class="server-druzhban-head">
            <div class="server-druzhban-text block-pad">
                Лучшие дружбаны
            </div>
            <img  style="float: right; padding-right: 64px; padding-top: 30px;" src="images/icons/druzhban-fist.png">
        </div>
        <div class="server-druzhban-user-block">
            <template v-for="druzhban in druzhbans">
                <div class="server-druzhban-user" :key="druzhban.id">
                    <img :src="'https://a.gatari.pw/'+druzhban.id"  class="server-druzhban-avatar block-pad">
                    <a :href="'/u/'+druzhban.id" style="padding-left: 6px;">{{ druzhban.username }}</a>
                    <div class="druzhban-month"> {{ druzhban.donor_expire | calcMonths}}</div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
    name: 'DonorBlock',
    data: function(){
        return {
            druzhbans: []
        }
    },
    filters: {
        calcMonths: function(unix){
            var currentTime = (+ new Date()) / 1000;
            var seconds = Math.floor(unix - currentTime);
            var intervals = Math.floor(seconds / 2592000);
            return intervals+" "+(intervals == 1 ? "month" : "months");
        }
    },
    created: function(){
        var vm = this;
        axios.get("https://api.gatari.pw/donors")
            .then((response) => vm.druzhbans = response.data.result);
    }
}
</script>