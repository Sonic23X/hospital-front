<template>
     <div class="loader-wrapper"  :class="{'loderhide' : !show }">
     <div class="loader">
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-ball"></div>
      </div>
    </div>
</template>

<script>
  import Userauth from '../auth/js/index';
  
  export default {
    data(){
      return{
        show: true
      };
    },
    mounted() {
      this.timeOut();
      Userauth.handleAuthentication().then(() =>{
        window.location.href = '/dashboards/default';
      }
      );
    },
    methods: {
      timeOut(){
        var self = this;
        setTimeout(function(){
          self.show = false;
        }, 1000);
      }
    }
  };
</script>

<style lang="scss" scoped>
.loader-wrapper.loderhide {
  display: none;
}
</style>
