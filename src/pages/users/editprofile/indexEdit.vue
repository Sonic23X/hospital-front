<template>
    <Breadcrumbs main="User" title="User Edit"/>
    <div class="container-fluid">
            <div class="edit-profile">
              <div class="row">
                  <myProfile/>
                  <editProfile/>
              </div>
            </div>
    </div>
</template>
<script>
import myProfile from "./myProfile.vue"
import editProfile from "./editProfile.vue"
export default {
    components:{
        myProfile,
        editProfile
    }
}
</script>