<template>
        <Breadcrumbs main="Knowledgebase" title="Knowledgebase" />
          <div class="container-fluid faq-section">
            <div class="row">
                <knowledgebaseSearch/>
                <faqWidgets/>
                 <div class="col-lg-12 featured-tutorial">
                <div class="header-faq">
                  <h3 class="mb-0">Featured Tutorials</h3>
                </div>
                <div class="row">
                <featuredTutorials/>
                <featuredView/>
                </div>
                 </div>
            </div>
          </div>
</template>
<script>
import knowledgebaseSearch from "../knowledgebaseSearch.vue"
import featuredTutorials from "./featuredTutorials.vue"
import faqWidgets from "./faqWidgets.vue"
import featuredView from "./featuredView.vue"
export default {
    components:{
        knowledgebaseSearch,
        faqWidgets,
        featuredTutorials,
        featuredView
    }
}
</script>