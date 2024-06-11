<template>
    <Breadcrumbs main="Email" title="Email Compose"/>
    <div class="container-fluid">
              <div class="email-wrap">
                <div class="row">
                    <emailSidebar/>
                    <emailProfile/>
                </div>
              </div>
    </div>
</template>
<script>
import emailSidebar from "../emailapp/emailSidebar.vue"
import emailProfile from "./emailProfile.vue"
export default {
    components:{
        emailSidebar,
        emailProfile
    }
}
</script>