<template>
    <Breadcrumbs main="Learning" title="Learning List" />
     <div class="container-fluid">
            <div class="row learning-block">
                <blogList/>
                <learningFilter/>
            </div>
     </div>
</template>
<script>
import learningFilter from "../learningfilter/learningFilter.vue"
import blogList from "./blogList.vue"
export default {
    components:{
        learningFilter,
        blogList
    }
}
</script>