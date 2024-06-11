<template>
     <Breadcrumbs main="Users" title="User Profile"/>
      <div class="container-fluid">
            <div class="user-profile">
              <div class="row">
                  <userProfile/>
                  <aboutMe/>
                   <div class="col-xl-8 col-lg-12 col-md-7 xl-65">
                  <div class="row">
                  <profilePost/>
                  </div>
                   </div>
              </div>
            </div>
      </div>
</template>
<script>
import userProfile from "./userProfile.vue"
import aboutMe from "./aboutMe.vue"
import profilePost from "./profilePost.vue"
export default {
    components:{
        userProfile,
        aboutMe,
        profilePost
    }
}
</script>