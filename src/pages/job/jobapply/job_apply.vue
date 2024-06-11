<template>
        <Breadcrumbs main="Job Search" title="Apply" />
         <div class="container-fluid">
            <div class="row">
                <jobSidebar/>
                <jobSearch/>
            </div>
         </div>
</template>
<script>
import jobSidebar from "../jobfilter/jobSidebar.vue"
import jobSearch from "../jobapply/jobSearch.vue"
export default {
    components:{
        jobSidebar,
        jobSearch
    }
}
</script>