<template>
    <Breadcrumbs main="Charts" title="Chartist Chart"/>
     <div class="container-fluid">
            <div class="row">
                <advancedAnimations/>
                <svgAnimation/>
                <animatingDonut/>
                <biPolar/>
                <lineChart/>
                <barChart/>
                <stackedChart/>
                <horizontalChart/>
                <extremeResponsive/>
                <simpleChart/>
                <holesData/>
                <filledHoles/>
            </div>
     </div>
</template>
<script>
import advancedAnimations from "./advancedAnimations.vue"
import svgAnimation from "./svgAnimation.vue"
import animatingDonut from "./animatingDonut.vue"
import biPolar from "./biPolar.vue"
import lineChart from "./lineChart.vue"
import barChart from "./barChart.vue"
import stackedChart from "./stackedChart.vue"
import horizontalChart from "./horizontalChart.vue"
import extremeResponsive from "./extremeResponsive.vue"
import simpleChart from "./simpleChart.vue"
import holesData from "./holesData.vue"
import filledHoles from "./filledHoles.vue"
export default {
    components:{
        advancedAnimations,
        svgAnimation,
        animatingDonut,
       biPolar,
       lineChart,
       barChart,
       stackedChart,
       horizontalChart,
       extremeResponsive,
       simpleChart,
       holesData,
       filledHoles
    }
}
</script>