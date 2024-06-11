<template>
  <div class="page-wrapper compact-wrapper" id="pageWrapper">

    <div class="container-fluid p-0">
      <div class="comingsoon">
        <div class="comingsoon-inner text-center"><img class="img-fluid for-light"
            src="../../assets/images/logo/small-logo.png" alt="looginpage">
          <h5>WE ARE COMING SOON</h5>
          <div class="countdown" id="clockdiv">
            <timer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import timer from "./comingsoon_timer.vue"
 export default{
    components: {
      timer
    },
    data(){
      return{
        startTime: 'Apr 29, 2021 00:00:00',
        endTime: 'Apr 29, 2023 00:00:00',
      };
    },
  };

</script>