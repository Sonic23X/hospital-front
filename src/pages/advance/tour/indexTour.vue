<template>
    <Breadcrumbs main="Bonus Ui" title="Tour"/>
    <div class="container-fluid">
            <div class="user-profile">
              <div class="row">
                  <tourProfile/>
                  <aboutMe/>
                   <div class="col-xl-9 col-lg-12 box-col-9 col-md-7 xl-70">
                  <div class="row">
                      <profilePost/>
                    
                  </div>
                   </div>
                   <v-tour name="myTour" :steps="steps" :options="tourOptions"></v-tour>
              </div>
            </div>
    </div>
</template>
<script>
import tourProfile from "./tourProfile.vue"
import aboutMe from "./aboutMe.vue"
import profilePost from "../../users/userprofile/profilePost.vue"

export default {
    components:{
        tourProfile,
        aboutMe,
        profilePost,
        
    },
     data() {
    return {
      tourOptions: {
        useKeyboardNavigation: true,
        labels: {
          buttonSkip: "Skip",
          buttonPrevious: "Back",
          buttonNext: "Next",
          buttonStop: "Done",
        },
      },
      toogle: true,
      steps: [
        {
          target: "#profile-tour",
          content: "This is Profile image",
        },
        {
          target: "#update-profile-tour",
          content: "Change Profile image here",
        },
        {
          target: "#info-bar-tour",
          content: "This is the your details",
        },
        {
          target: "#social-bar-tour",
          content: "This is your Social details",
        },
        {
          target: "#first-post-tour",
          content: "This is the your first Post",
          params: {
            placement: "top",
          },
        },
        {
          target: "#last-post-tour",
          content: "This is the your last Post",
          params: {
            placement: "top",
          },
        },
      ],
    };
  },
  mounted: function () {
    this.$tours["myTour"].start();
  },
}
</script>