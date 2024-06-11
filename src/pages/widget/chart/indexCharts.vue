<template>
         <Breadcrumbs main="Widgets" title="Chart"/>
          <div class="container-fluid">
            <div class="row">
             <saleView/>
             <projectsView/>
             <productView/>
            </div>
             <div class="row">
                 <marketingView/>
                 <totalEarning/>
                 <skillStatus/>
                 <orderStatus/>
             </div>
             <div class="row">
                 <liveProducts/>
                 <turnOver/>
                 <monthlySales/>
                 <usesChart/>
             </div>
             <div class="row">
                 <browserUses/>
             </div>
             <div class="row">
                 <financeView/>
                 <orderView/>
             </div>
          </div>
</template>
<script>
import saleView from "./saleView.vue"
import projectsView from "./projectsView.vue"
import productView from "./productView.vue"
import marketingView from "./marketingView.vue"
import totalEarning from "./totalEarning.vue"
import skillStatus from "./skillStatus.vue"
import orderStatus from "./orderStatus.vue"
import liveProducts from "./liveProducts.vue"
import turnOver from "./turnOver.vue"
import monthlySales from "./monthlySales.vue"
import usesChart from "./usesChart.vue"
import browserUses from "./browserUses.vue"
import financeView from "./financeView.vue"
import orderView from "./orderView.vue"
export default {
   components:{
       saleView,
       projectsView,
       productView,
       marketingView,
       totalEarning,
       skillStatus,
       orderStatus,
       liveProducts,
       turnOver,
       monthlySales,
       usesChart,
       browserUses,
       financeView,
       orderView
   } 
}
</script>