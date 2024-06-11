<template>
    <Breadcrumbs main="Form Widgets" title="Select2"/>
     <div class="container-fluid">
            <div class="select2-drpdwn">
              <div class="row">
                  <selectView/>
                  <outlineColor/>
                  <fullColored/>
              </div>
            </div>
     </div>
</template>
<script>
import outlineColor from "./outlineColor.vue"
import fullColored from "./fullColored.vue"
import selectView from "./selectView.vue"
export default {
    components:{
        outlineColor,
        fullColored,
        selectView
    }
}
</script>