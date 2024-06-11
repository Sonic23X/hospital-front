<template>
  <div class="page-wrapper" id="pageWrapper">
    <div class="error-wrapper">
      <div class="container">
        <div class="error-page1">
          <div class="svg-wrraper">
            <errorPage2 />
          </div>
          <div class="col-md-8 offset-md-2">
            <h2>500 - Internal server error</h2>
            <p class="sub-content">The page you are attempting to reach is currently not available. This may be because
              the page does not exist or has been moved.</p><a class="btn btn-primary btn-lg" href="index.html">BACK TO
              HOME PAGE</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import errorPage2 from "./svg/errorPage2.vue"
export default {
    components:{
        errorPage2
    }
}
</script>