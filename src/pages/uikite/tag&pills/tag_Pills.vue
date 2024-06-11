<template>
      <Breadcrumbs main="Ui Kits" title="Tag & Pills"/>
       <div class="container-fluid">
            <div class="row">
                <badgeVariations/>
                <roundedBadge/>
                <badgesButtons/>
            </div>
       </div>
</template>
<script>
import badgeVariations from './badgeVariations.vue'
import roundedBadge from "./roundedBadge.vue"
import badgesButtons from "./badgesButtons.vue"
export default {
    components:{
        badgeVariations,
        roundedBadge,
        badgesButtons
    }
}
</script>