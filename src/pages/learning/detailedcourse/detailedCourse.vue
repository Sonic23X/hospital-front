<template>
     <Breadcrumbs main="Learning" title="Detailed Course" />
     <div class="container-fluid blog-page">
            <div class="row learning-block">
                <blogDetails/>
                <learningFilter/>
            </div>
     </div>
</template>
<script>
import blogDetails from "./blogDetails.vue"
import learningFilter from "../learningfilter/learningFilter.vue"
export default {
    components:{
        blogDetails,
        learningFilter
    }
}
</script>