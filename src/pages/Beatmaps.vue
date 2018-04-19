<template>

    <div id="beatmaps">
            <link rel="stylesheet" href="css/bm-main.css">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                <div class="beatmap-banner">
                    <div class="beatmap-banner-stroke block-pad">Beatmaps</div>
                    <div class="beatmap-banner-stroke2 block-pad">Here you can find any map what you want! <br>
                        Feel free to download it from our server!

                    </div>

                </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <audio id="audio_709296" src="https://b.ppy.sh/preview/709296.mp3"></audio>

                            <div class="card hovercard">
                        <a target="_blank" href="https://osu.gatari.pw/s/709296" class="cardheader ranked" id="709296" style="background: url('https://assets.ppy.sh/beatmaps/709296/covers/cover.jpg');">
                        <span class="beatmap songname title">Take This Life</span>
                        <span class="beatmap songname">In Flames</span>

                        </a>
                        
                        
                        <div class="info">
                            <div class="play-download">
                                
                                <a class="btn-orange btn btn-circle  btn-sm" target="_blank" href="https://osu.gatari.pw/d/709296"><i class="fa fa-download"></i></a>
                            </div>

                            <div class="desc">
                                Mapped by LMT
                            </div>
                        </div>
                        <div class="bottom">
                            
                            <a href="#" data-toggle="popover" data-placement="right" data-content="kiry's Tragic Love Expert" data-trigger="hover" data-original-title="" title=""><div class="diffIcon expert"></div></a><a href="#" data-toggle="popover" data-placement="right" data-content="End Me" data-trigger="hover" data-original-title="" title=""><div class="diffIcon expert"></div></a>
                        </div>
                    </div>
                <div class="beatmapset-panel__shadow"></div>
                <span class="beatmapset-panel-prev beatmapset-panel__play js-audio--play">
                <span onclick="play(709296);" id="icon_709296" class="fa fa-play"></span></span></div>
            </div>
        </div>
        






        
    </div> 
</template>

<script>
    export default {
    name: 'Beatmaps'
}

</script>