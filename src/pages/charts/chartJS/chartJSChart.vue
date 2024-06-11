<template>
    <Breadcrumbs main="Charts" title="ChartJS Chart"/>
     <div class="container-fluid">
            <div class="row">
                <barChart/>
            </div>
     </div>
</template>
<script>
import barChart from "./barChart.vue"
export default {
    components:{
        barChart
    }
}
</script>