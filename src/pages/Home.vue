<template>
<div id="home">
    <div class="container">
        <div class="row"> 
            <div class="col"> 
                <div class="main-block">
                        <div class="main-block-uppertext">
                    <div class="main-block-gatari block-pad"> osu!gatari </div>
                    <div class="main-block-gatari2 block-pad"><span class="info-why">{{ $t('home.info') }}</span>
                    </div>
                    <div class="main-block-gatari3 block-pad">
                        <a class="users-count"> {{ users }}</a> {{ $t('misc.users') }} <a class="users-count"> {{ usersOnline }}</a> {{ $t('misc.onlineUsers') }}
                    </div>
                </div>
                    <button class="main-block-registration">
                        {{ $t('misc.registration') }}
                    </button>
                </div>                                
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row"> 
            <div class="col">
                <div class="info-block"> 
                    <div class="info-text block-pad" >{{ $t('home.why') }}</div>
                    <div class="info-text2 block-pad"><span class="info-why">{{ $t('home.cuz') }}</span></div>
                    
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-lg-6">
                <statsblock :onReady='onReady'/>
            </div>
            <div class="col-sm-12 col-lg-6">
                <donorblock/>
        </div>
        </div>
    </div>
    
</div>
</template>

<script>
import donorblock from '@/components/Home/DonorBlock.vue'
import statsblock from '@/components/Home/StatsBlock.vue'
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

