<template>
     <Breadcrumbs main="Form Controls" title="Validation Forms" />
      <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                  <customStyles/>
                  <browserDefaults/>
                  <supportedElements/>
                  <toolTips/>
              </div>
            </div>
      </div>
</template>
<script>
import customStyles from "./customStyles.vue"
import browserDefaults from "./browserDefaults.vue"
import supportedElements from "./supportedElements.vue"
import toolTips from "./toolTips.vue"
export default {
    components:{
        customStyles,
        browserDefaults,
        supportedElements,
        toolTips
    }
}
</script>