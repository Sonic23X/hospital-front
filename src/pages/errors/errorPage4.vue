<template>
     <div class="error-wrapper error-page1">
      <div class="container">
        <div class="svg-wrraper">
         <errorPage4/>
        </div>
        <div class="col-md-8 offset-md-2">
          <h2>Oops! This Page is Not Found.</h2>
          <p class="sub-content">The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</p><a class="btn btn-primary btn-lg" href="index.html">BACK TO HOME PAGE</a>
        </div>
      </div>
    </div>
</template>
<script>
import errorPage4 from "./svg/errorPage4.vue"
export default {
    components:{
        errorPage4
    }
}
</script>