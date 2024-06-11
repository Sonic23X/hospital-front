<template>
      <Breadcrumbs main="Bonus Ui" title="Tabbed Card"/>
      <div class="container-fluid">
            <div class="row">
                <simpleTab/>
                <tabIcon/>
                <colorTab/>
                <colorOption/>
                <materialTab/>
                <materialIcon/>
                <materialColor/>
            </div>
      </div>
</template>
<script>
import simpleTab from "./simpleTab.vue"
import tabIcon from "./tabIcon.vue"
import colorTab from "./colorTab.vue"
import colorOption from "./colorOption.vue"
import materialTab from "./materialTab.vue"
import materialIcon from "./materialIcon.vue"
import materialColor from "./materialColor.vue"
export default {
    components:{
        simpleTab,
        tabIcon,
        colorTab,
        colorOption,
        materialTab,
        materialIcon,
        materialColor
    }
}
</script>