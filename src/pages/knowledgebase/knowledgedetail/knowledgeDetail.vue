<template>
     <Breadcrumbs main="Knowledgebase" title="Knowledgebase" />
      <div class="container-fluid blog-page">
            <div class="row">
                <knowledgeFilter/>
                <blogSingle/>
            </div>
      </div>
</template>
<script>
import knowledgeFilter from "./knowledgeFilter.vue"
import blogSingle from "./blogSingle.vue"
export default {
    components:{
        knowledgeFilter,
        blogSingle
    }
}
</script>