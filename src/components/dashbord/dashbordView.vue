<template>
    <Breadcrumbs title="MedTechPro"/>
    <div class="container-fluid">
            <div class="row starter-main">
                <projectDevelopment/>
                <!-- <simpleCard/>
                <withHeader/> -->
            </div>
    </div>
</template>
<script>
import projectDevelopment from "./projectDevelopment.vue"
// import simpleCard from "./simpleCard.vue"
// import withHeader from "./withHeader.vue"
export default {
    components:{
        projectDevelopment,
        // simpleCard,
        // withHeader
    }
}
</script>