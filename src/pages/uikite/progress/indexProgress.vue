<template>
      <Breadcrumbs main="Ui Kits" title="Progress"/>
       <div class="container-fluid">
            <div class="row">
                <basicProgress/>
                <largeProgress/>
                <smallProgress/>
                <customHeight/>
                <multipleBars/>
                <barsStriped/>
                <barsAnimated/>
            </div>
       </div>
</template>
<script>
import basicProgress from "./basicProgress.vue"
import largeProgress from "./largeProgress.vue"
import smallProgress from "./smallProgress.vue"
import customHeight from "./customHeight.vue"
import multipleBars from "./multipleBars.vue"
import barsStriped from "./barsStriped.vue"
import barsAnimated from "./barsAnimated.vue"
export default {
    components:{
        basicProgress,
        largeProgress,
        smallProgress,
        customHeight,
        multipleBars,
        barsStriped,
        barsAnimated
    }
}
</script>