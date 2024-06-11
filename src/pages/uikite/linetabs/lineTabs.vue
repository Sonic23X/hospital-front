<template>
    <Breadcrumbs main="Tabs" title="Line Tabs"/>
     <div class="container-fluid">
            <div class="row">
                <simpleMaterial/>
                <bottomTab/>
                <leftTab/>
                <rightTab/>
                <colorTab/>
                <materialStyle/>
            </div>
     </div>
</template>
<script>
import simpleMaterial from "./simpleMaterial.vue"
import bottomTab from "./bottomTab.vue"
import leftTab from "./leftTab.vue"
import rightTab from "./rightTab.vue"
import colorTab from "./colorTab.vue"
import materialStyle from "./materialStyle.vue"
export default {
    components:{
        simpleMaterial,
        bottomTab,
        leftTab,
        rightTab,
        colorTab,
        materialStyle
    }
}
</script>