<template>
      <Breadcrumbs main="Form Widgets" title="Typeahead" />
      <div class="container-fluid">
            <div class="typeahead">
              <div class="row">
                  <basicDemo/>
                  <prefetchView/>
                  <bloodhoundView/>
                  <remoteView/>
                  <customTemplates/>
                  <multipleSections/>
                  <rtlSupport/>
              </div>
            </div>
      </div>
</template>
<script>
import basicDemo from "./basicDemo.vue"
import prefetchView from "./prefetchView.vue"
import bloodhoundView from "./bloodhoundView.vue"
import remoteView from "./remoteView.vue"
import customTemplates from "./customTemplates.vue"
import multipleSections from "./defaultSuggestions.vue"
import rtlSupport from "./rtlSupport.vue"
export default {
    components:{
        basicDemo,
        prefetchView,
        bloodhoundView,
        remoteView,
        customTemplates,
        multipleSections,
        rtlSupport
    }
}
</script>