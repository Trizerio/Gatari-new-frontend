<template>
    <div class="server-druzhban">
        <div class="server-druzhban-head">
            <div class="server-druzhban-text block-pad">{{ $t('home.donors.title') }}</div>
            <div  class="icon-shadow block-icon druzhban-icon"></div>
        </div>
        <div class="server-druzhban-user-block">
            <template v-for="druzhban in druzhbans">
                <div class="server-druzhban-user" :key="druzhban.id">
                    <img :src="'https://a.gatari.pw/'+druzhban.id"  class="server-druzhban-avatar block-pad">
                    <a :href="'/u/'+druzhban.id" style="padding-left: 6px;">{{ druzhban.username }}</a>
                    <div class="druzhban-month"> {{ druzhban.donor_expire | calcMonths($t('home.donors.month')) }}</div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'DonorBlock',
    data: function(){
        return {
            druzhbans: []
        }
    },
    filters: {
        calcMonths: function(unix, month){
            var currentTime = (+ new Date()) / 1000;
            var seconds = Math.floor(unix - currentTime);
            var intervals = Math.floor(seconds / 2592000);
            return intervals+" "+month;
        }
    },
    created: function(){
        var vm = this;
        this.$axios.get("https://api.gatari.pw/donors")
            .then((response) => vm.druzhbans = response.data.result);
    }
}
</script>