<template>
    <Breadcrumbs main="Charts" title="ApexChart" />
    <div class="container-fluid ">
      <div class="row">
          <areaChart/>
          <spalineChart/>
          <barChart/>
          <columnChart/>
          <bubbleChart/>
          <steplineChart/>
          <columnChart1/>
          <pieChart/>
          <donutChart/>
          <mixedChart/>
          <candlestickChart/>
          <radarChart/>
          <radialBar/>
      </div>
    </div>
</template>
<script>
import areaChart from "./areaChart.vue"
import spalineChart from "./spalineChart.vue"
import barChart from "./barChart.vue"
import columnChart from "./columnChart.vue"
import bubbleChart from "./bubbleChart.vue"
import steplineChart from "./steplineChart.vue"
import columnChart1 from "./columnChart1.vue"
import pieChart from "./pieChart.vue"
import donutChart from "./donutChart.vue"
import mixedChart from "./mixedChart.vue"
import candlestickChart from "./candlestickChart.vue"
import radarChart from "./radarChart.vue"
import radialBar from "./radialBar.vue"
export default {
    components:{
        areaChart,
        spalineChart,
        barChart,
        columnChart,
        bubbleChart,
        steplineChart,
        columnChart1,
        pieChart,
        donutChart,
        mixedChart,
        candlestickChart,
        radarChart,
        radialBar
    }
}
</script>