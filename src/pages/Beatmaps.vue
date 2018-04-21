<template>

    <div id="beatmaps">
            <link rel="stylesheet" href="css/beatmaps.css">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                <div class="beatmap-banner">
                    <div class="beatmap-banner-stroke block-pad">Beatmaps</div>
                    <div class="beatmap-banner-stroke2 block-pad">Here you can find any map what you want! <br>
                        Feel free to download it from our server!
                    </div>
                    <input type="text" class="block-pad beatmap-search">
                    <button class="beatmap-search-btn">Search </button>

                </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
            <div class="col-lg-12">
            <div class="beatmap-select-bg">
                <beatmap/>
                </div>
            </div>
            </div>
        </div>       
    </div> 
</template>

<script>
    import beatmap from '@/components/BeatmapsList/Beatmap.vue'
    export default {
    name: 'Beatmaps',
    components:{
        beatmap
    }
    }

</script>