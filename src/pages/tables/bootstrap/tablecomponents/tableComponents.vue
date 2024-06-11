<template>
     <Breadcrumbs main="Bootstrap Tables" title="Table Components"/>
      <div class="container-fluid">
            <div class="row">
                <uiComponents/>
                <alertsComponents/>
                <progressbarComponents/>
                <checkboxComponents/>
                <radioButtons/>
                <selectComponents/>
                <inputComponenets/>
                <badgesComponents/>
                <tooltipTriggers/>
                <switchComponents/>
            </div>
      </div>
</template>
<script>
import uiComponents from "./uiComponents.vue"
import alertsComponents from "./alertsComponents.vue"
import progressbarComponents from "./progressbarComponents.vue"
import checkboxComponents from "./checkboxComponents.vue"
import radioButtons from "./radioButtons.vue"
import selectComponents from "./selectComponents.vue"
import inputComponenets from "./inputComponenets.vue"
import badgesComponents from "./badgesComponents.vue"
import tooltipTriggers from "./tooltipTriggers.vue"
import switchComponents from "./switchComponents.vue"
export default {
    components:{
        uiComponents,
        alertsComponents,
        progressbarComponents,
        checkboxComponents,
        radioButtons,
        selectComponents,
        inputComponenets,
        badgesComponents,
        tooltipTriggers,
        switchComponents
    }
}
</script>