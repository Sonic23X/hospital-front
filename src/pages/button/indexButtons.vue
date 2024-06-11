<template>
    <Breadcrumbs main="Buttons" title="Default Style" />
    <div class="container-fluid">           
            <div class="row">
              <div class="col-sm-12">
                  <defaultButtons/>
                  <buttonGroup/>
                  <largeButtons/>
                  <boldBorder/>
              </div>
            </div>
    </div>
</template>
<script>
import defaultButtons from "./defaultButtons.vue"
import buttonGroup from "./buttonGroup.vue"
import largeButtons from "./largeButtons.vue"
import boldBorder from "./boldBorder.vue"
export default {
    components:{
        defaultButtons,
        buttonGroup,
        largeButtons,
        boldBorder
    }
}
</script>