export var authMixin = {
    data(){
      return {
        user: {}
      }
    },
    methods: {
      auth: function(login, password, callback){
        var vm = this;
        if(login == '' || password == '') return;
        this.$axios.get("https://api.gatari.pw/user/auth",{params:{"u":login,"p":password}})
        .then(function(response){
          callback(response.data);
        })
        .catch(function(e){
            console.log(e);
            vm.user = null;
            callback({'code': 500});
        });
        
    }
    }
  };