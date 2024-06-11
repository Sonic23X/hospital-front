<template> 
    <Breadcrumbs main="Bonus Ui" title="Ribbons"/>
     <div class="container-fluid">
         <coloredRibbons/>
         <ribbonsRight/>
     </div>
</template>
<script>
import coloredRibbons from "./coloredRibbons.vue"
import ribbonsRight from "./ribbonsRight.vue"
export default {
    components:{
        coloredRibbons,
        ribbonsRight, 
    }
}
</script>