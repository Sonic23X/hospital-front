<template>
      <Breadcrumbs main="Form Controls" title="Checkbox & Radio"/>
      <div class="container-fluid">
            <div class="row">
                <customRadio/>
                <customCheckbox/>
                <animatedButtons/>
                <squareCheckbox/>
            </div>
      </div>
</template>
<script>
import customRadio from "./customRadio.vue"
import customCheckbox from "./customCheckbox.vue"
import animatedButtons from "./animatedButtons.vue"
import squareCheckbox from "./squareCheckbox.vue"
export default {
    components:{
        customRadio,
        customCheckbox,
        animatedButtons,
        squareCheckbox
    }
}
</script>