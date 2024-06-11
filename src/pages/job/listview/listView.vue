<template>
        <Breadcrumbs main="Job Search" title="List View" />
         <div class="container-fluid">
            <div class="row">
                <jobSidebar/>
                <jobSearch/>
            </div>
         </div>
</template>
<script>
import jobSidebar from "../jobfilter/jobSidebar.vue"
import jobSearch from "./jobSearch.vue"
export default {
    components:{
        jobSidebar,
        jobSearch
    }
}
</script>