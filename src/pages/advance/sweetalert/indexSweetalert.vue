<template>
      <Breadcrumbs main="Bonus Ui" title="Sweet Alert"/>
       <div class="container-fluid">
            <div class="row">
                <basicExamples/>
                <advancedState/>
                <alertState/>
            </div>
       </div>
</template>
<script>
import basicExamples from "./basicExamples.vue"
import advancedState from "./advancedState.vue"
import alertState from "./alertState.vue"
export default {
    components:{
        basicExamples,
        advancedState,
        alertState
    }
}
</script>