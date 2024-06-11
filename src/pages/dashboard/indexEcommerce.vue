<template>
    <Breadcrumbs title="Inicio"/>
    <div class="container-fluid ecommerce-dash">
        <div class="row">
            <salesStats/>
            <invoiceOverview/>
            <hotSelling/>
            <recentOrders/>
            <ourActivities/>
            <revenueBy/> 
            <dealView/>
            <getSupport/>
            <totalSale/>
        </div>
    </div>
</template>
<script>
import salesStats from "./salesStats.vue"
import invoiceOverview from "./invoiceOverview.vue"
import hotSelling from "./hotSelling.vue"
import recentOrders from "./recentOrders.vue"
import ourActivities from "./ourActivities.vue"
import revenueBy from "./revenueBy.vue"
import totalSale from "./totalSale.vue"
export default {
    components:{
        salesStats,
        invoiceOverview,
        hotSelling,
        recentOrders,
        ourActivities,
        revenueBy,
        totalSale,
    }
}
</script>