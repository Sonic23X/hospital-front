<template>
     <Breadcrumbs main="Dashboard" title="project list" />
     <div class="container-fluid">
            <div class="row project-cards">
                <projectList/>
            </div>
     </div>
</template>
<script>
import projectList from "./projectList.vue"
export default {
    components:{
        projectList
    }
}
</script>