<template>
   <div id="app">
     <div class="loader-wrapper" :class="{'loderhide' : !show }">
      <div class="loader">
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-ball"></div>
      </div>
    </div>

  <router-view/>
 
   </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return{
        show: true
      };
    },
    mounted() {
      this.timeOut();
    },
    methods:{
      timeOut(){
        var self = this;
        setTimeout(function(){
          self.show = false;
        }, 2000);
      }
    }
  };
</script>

<style lang="scss">
.loader-wrapper.loderhide {
  display: none;
}
</style>
