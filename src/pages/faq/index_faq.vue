<template>
    <Breadcrumbs main="FAQ" title="FAQ" />
     <div class="container-fluid">
            <div class="faq-wrap">
              <div class="row">
                  <faqWidgets/>
                  <quickQuestions/>
                  <featuredTutorials/>
                  <latestArticles/>
              </div>
            </div>
     </div>
</template>
<script>
import faqWidgets from "./faqWidgets.vue"
import quickQuestions from "./quickQuestions.vue"
import featuredTutorials from "./featuredTutorials.vue"
import latestArticles from "./latestArticles.vue"
export default {
    components:{
        faqWidgets,
        quickQuestions,
        featuredTutorials,
        latestArticles
    }
}
</script>