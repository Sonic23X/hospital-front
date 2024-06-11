<template>
     <Breadcrumbs main="Animation" title="AOS Animation"/>
      <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                  <aosExample/>
                  <initAOS/>
              </div>
            </div>
      </div>
</template>
<script>
import aosExample from "./aosExample.vue"
import initAOS from "./initAOS.vue"
export default {
    components:{
        aosExample,
        initAOS
    }
}
</script>