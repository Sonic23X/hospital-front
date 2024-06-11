<template>
  <div class="page-wrapper" id="pageWrapper">
    <div class="error-wrapper">
      <div class="container">
        <div class="error-page1">
          <div class="svg-wrraper mb-0">
            <errorPage1 />
          </div>
          <div class="col-md-8 offset-md-2">
            <h2>Sorry, something goes wrong</h2>
            <p class="sub-content">The page you are attempting to reach is currently not available. This may be because
              the page does not exist or has been moved.</p><router-link class="btn btn-primary btn-lg" to="/"> BACK TO
              HOME PAGE</router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import errorPage1 from "./svg/errorPage1.vue"
export default {
    components:{
        errorPage1
    }
}
</script>
 