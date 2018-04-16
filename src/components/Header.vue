<template>
    
    <div class="header-bg">
        <div class="container">
                <div class="row">
                <!-- Here start the header -->
                    <div class="col">
                        <div class="logo">osu!gatari</div>
                        
                    </div>       
                    <div class="col">
                    <!-- menu -->
                <nav class="navbar navbar-expand-lg navbar-light ">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active" href="#">Leaderboard <span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href="#">Beatmaps</a>
                            <input type="text" class="main-search">
           
                <a href="#" class="login">      <img src="images/icons/login.png"  style="box-shadow: none !important; height: 16px; width: 16px;"> Login</a>
                </div>
              </div>
                </nav>
                <!-- menu ended -->
                    </div>
                </div>    
            </div>
        </div>
</template>

<script>
    export default {
        name: 'navbar'
    }
</script>