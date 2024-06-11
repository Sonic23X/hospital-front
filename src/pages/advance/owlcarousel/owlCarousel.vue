<template>
    <Breadcrumbs main="Bonus Ui" title="Owl Carousel"/>
     <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                  <basicExample/>
                  <responsiveExample/>
                  <centerExample/>
                  <mergeExample/>
                  <autoExample/>
                  <urlNavigations/>
                  <eventsView/>
                  <stagePadding/>
                  <rightLeft/>
                  <lazyLoad/>
                  <animateExample/>
                  <autoPlay/>
                  <autoHeight/>
                  <mouseWheel/>
              </div>
            </div>
     </div>
</template>
<script>
import basicExample from "./basicExample.vue"
import responsiveExample from "./responsiveExample.vue"
import centerExample from "./centerExample.vue"
import mergeExample from "./mergeExample.vue"
import autoExample from "./autoExample.vue"
import urlNavigations from "./urlNavigations.vue"
import eventsView from "./eventsView.vue"
import stagePadding from "./stagePadding.vue"
import rightLeft from "./rightLeft.vue"
import lazyLoad from "./lazyLoad.vue"
import animateExample from "./animateExample.vue"
import autoPlay from "./autoPlay.vue"
import autoHeight from "./autoHeight.vue"
import mouseWheel from "./mouseWheel.vue"
export default {
    components:{
        basicExample,
        responsiveExample,
        centerExample,
        mergeExample,
        autoExample,
        urlNavigations,
        eventsView,
        stagePadding,
        rightLeft,
        lazyLoad,
        animateExample,
        autoPlay,
        autoHeight,
        mouseWheel
    }
}
</script>