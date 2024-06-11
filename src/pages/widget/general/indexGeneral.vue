<template>
       <Breadcrumbs main="Widgets" title="General"/>
        <div class="container-fluid general-widget">
            <div class="row">
                <earningsGeneral/>
                <productsGeneral/>
                <messagesGeneral/>
                <newUser/>
                <saleDetails/>
                <orderDetails/>
                <calenderGeneral/>
                <customerFeedback/>
                <clockGeneral/>
                <recentActivity/>
                <managergeneral/>
                <poioklotGeneral/>
                <faceBook/>
                <twitterGeneral/>
                <linkeDin/>
                <instaGram/>
                <browserView/>
                <productCart/>
                <employeeStatus/>
                <explainGeneral/>
                <contactUs/>
            </div>
        </div>
</template>
<script>
import earningsGeneral from "./earningsGeneral.vue"
import messagesGeneral from "./messagesGeneral.vue"
import productsGeneral from "./productsGeneral.vue"
import newUser from "./newUser.vue"
import saleDetails from "./saleDetails.vue"
import orderDetails from "./orderDetails.vue"
import calenderGeneral from "./calenderGeneral.vue"
import customerFeedback from "./customerFeedback.vue"
import clockGeneral from "./clockGeneral.vue"
import recentActivity from "./recentActivity.vue"
import managergeneral from "./managerView.vue"
import poioklotGeneral from "./poioklotGeneral.vue"
import faceBook from "./faceBook.vue"
import twitterGeneral from "./twitterGeneral.vue"
import linkeDin from "./linkeDin.vue"
import instaGram from "./instaGram.vue"
import browserView from "./browserView.vue"
import productCart from "./productCart.vue"
import employeeStatus from "./employeeStatus.vue"
import explainGeneral from "./explainGeneral.vue"
import contactUs from "./contactUs.vue"
export default {
    components:{
        earningsGeneral,
        productsGeneral,
        messagesGeneral,
        newUser,
        saleDetails,
        orderDetails,
        calenderGeneral,
        customerFeedback,
        clockGeneral,
        recentActivity,
        managergeneral,
        poioklotGeneral,
        faceBook,
        twitterGeneral,
        linkeDin,
        instaGram,
        browserView,
        productCart,
        employeeStatus,
        explainGeneral,
        contactUs
    }
}
</script>