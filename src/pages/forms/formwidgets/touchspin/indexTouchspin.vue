<template>
      <Breadcrumbs main="Form Widgets" title="Touchspin"/>
      <div class="container-fluid">
            <div class="bootstrap-touchspin">
              <div class="row">
                  <defaultTouchspin/>
                  <verticalTouchspin/>
                  <touchspinPostfix/>
                  <touchspinwithPrefix/>
                  <minMax/>
                  <touchspinInitial/>
                  <touchspinSteps/>
                  <decimalValue/>
                  <changeButton/>
                  <touchspinIcon/>
                  <iconButton/>
                  <touchspinDropdown/>
                  <touchspinMousewheel/>
                  <horizontalTouchspin/>
              </div>
            </div>
      </div>
</template>
<script>
import defaultTouchspin from "./defaultTouchspin.vue"
import verticalTouchspin from "./verticalTouchspin.vue"
import touchspinPostfix from "./touchspinPostfix.vue"
import touchspinwithPrefix from "./touchspinwithPrefix.vue"
import minMax from "./minMax.vue"
import touchspinInitial from "./touchspinInitial.vue"
import touchspinSteps from "./touchspinSteps.vue"
import decimalValue from "./decimalValue.vue"
import changeButton from "./changeButton.vue"
import touchspinIcon from "./touchspinIcon.vue"
import iconButton from "./iconButton.vue"
import touchspinDropdown from "./touchspinDropdown.vue"
import touchspinMousewheel from "./touchspinMousewheel.vue"
import horizontalTouchspin from "./horizontalTouchspin.vue"
export default {
    components:{
        defaultTouchspin,
        verticalTouchspin,
        touchspinPostfix,
        touchspinwithPrefix,
        minMax,
        touchspinInitial,
        touchspinSteps,
        decimalValue,
        changeButton,
        touchspinIcon,
        iconButton,
        touchspinDropdown,
        touchspinMousewheel,
        horizontalTouchspin
    }
}
</script>