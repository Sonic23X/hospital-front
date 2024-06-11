<template>
      <div class="error-wrapper error-page1">
      <div class="container">
        <div class="svg-wrraper">
         <errorPage3/>
        </div>
        <div class="col-md-8 offset-md-2">
          <h2>Internal Server Error</h2>
          <p class="sub-content">The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</p><router-link class="btn btn-primary btn-lg" to="/">BACK TO HOME PAGE</router-link>
        </div>
      </div>
    </div>
</template>
<script>
import errorPage3 from "./svg/errorPage3.vue"
export default {
    components:{
        errorPage3
    }
}
</script>