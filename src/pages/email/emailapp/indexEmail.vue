<template>
      <Breadcrumbs main="Email" title="Email App"/>
      <div class="container-fluid">
            <div class="email-wrap">
              <div class="row">
                  <emailSidebar/>
                  <div class="col-xl-9 box-col-9 col-md-12 xl-70">
                  <div class="email-right-aside">
                    <div class="card email-body">
                      <div class="email-profile">
                        <div>
                          <div class="pe-0 b-r-light"></div>
                          <emailProfile/>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
      </div>
</template>
<script>
import emailSidebar from "./emailSidebar.vue"
import emailProfile from "./emailProfile.vue"
export default {
    components:{
        emailSidebar,
        emailProfile
    }
}
</script>