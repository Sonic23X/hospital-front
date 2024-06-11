<template>
 <Breadcrumbs main="Ui Kits" title="accordion"/>
      <div class="container-fluid">
            <div class="row">
                <basicAccordion/>
                <closeAccordion/>
                <colorAccordion/>
                <accordionIcon/>
            </div>
      </div>
</template>
<script>
import basicAccordion from "./basicAccordion.vue"
import closeAccordion from "./closeAccordion.vue"
import colorAccordion from "./colorAccordion.vue"
import accordionIcon from "./accordionIcon.vue"
export default {
    components:{
        basicAccordion,
        closeAccordion,
        colorAccordion,
        accordionIcon
    }
}
</script>