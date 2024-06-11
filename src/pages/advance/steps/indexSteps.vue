<template>
    <Breadcrumbs main="Bonus Ui" title="Steps"/>
     <div class="container-fluid">
            <div class="row">
                <defaultStep/>
                <stepIcon/>
                <stepStates/>
                <stepSizing/>
                <verticalStep/>
                <pearlsSteps/>
                <pearlsIcon/>
                <pearlsSizing/>
                <pearlsStates/>
            </div>
     </div>
</template>
<script>
import defaultStep from "./defaultStep.vue"
import stepIcon from "./StepIcon.vue"
import stepStates from "./stepStates.vue"
import stepSizing from "./stepSizing.vue"
import verticalStep from "./verticalStep.vue"
import pearlsSteps from "./pearlsSteps.vue"
import pearlsIcon from "./pearlsIcon.vue"
import pearlsSizing from "./pearlsSizing.vue"
import pearlsStates from "./pearlsStates.vue"
export default {
    components:{
        defaultStep,
        stepIcon,
        stepStates,
        stepSizing,
        verticalStep,
        pearlsSteps,
        pearlsIcon,
        pearlsSizing,
        pearlsStates
    }
}
</script>