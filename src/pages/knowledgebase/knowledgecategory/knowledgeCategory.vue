<template>
     <Breadcrumbs main="Knowledgebase" title="Knowledgebase" />
     <div class="container-fluid faq-section">
            <div class="row">
                <knowledgebaseSearch/>
                <faqWidgets/>
                 <div class="col-sm-12">
                <div class="header-faq">
                  <h3 class="mb-0">knowledge articles by category</h3>
                </div>
                <div class="row browse">
                    <knowledgeArticles/>
                    <articlesView/>
                </div>
                 </div>
            </div>
     </div>
</template>
<script>
import knowledgebaseSearch from "../knowledgebaseSearch.vue"
import knowledgeArticles from "./knowledgeArticles.vue"
import faqWidgets from "./faqWidgets.vue"
import articlesView from "./articlesView.vue"
export default {
    components:{
        knowledgebaseSearch,
        faqWidgets,
        knowledgeArticles,
        articlesView
    }
}
</script>