<template>
     <Breadcrumbs main="Charts" title="Google Chart"/>
     <div class="container-fluid">
            <div class="row">
                <areaChart1/>
                <columnChart/>
                <ganttChart/>
                <lineChart/>
                <comboChart/>
                <barChart2/>
                <wordTree/>
                <pieChart1/>
                <pieChart2/>
                <pieChart3/>
            </div>
     </div>
</template>
<script>
import areaChart1 from "./areaChart1.vue"
import columnChart from "./columnChart.vue"
import ganttChart from "./ganttChart.vue"
import lineChart from "./lineChart.vue"
import comboChart from "./comboChart.vue"
import barChart2 from "./barChart2.vue"
import wordTree from "./wordTree.vue"
import pieChart1 from "./pieChart1.vue"
import pieChart2 from "./pieChart2.vue"
import pieChart3 from "./pieChart3.vue"
export default {
    components:{
        areaChart1,
        columnChart,
        ganttChart,
        lineChart,
        comboChart,
        barChart2,
        wordTree,
        pieChart1,
        pieChart2,
        pieChart3
    }
}
</script>