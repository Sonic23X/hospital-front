<template>
    <Breadcrumbs main="Ui Kits" title="Typography"/>
    <div class="container-fluid">
            <div class="row">
                <headingView/>
                <lightNormal/>
                <inlineText/>
                <blockquotesView/>
            </div>
    </div>
</template>
<script>
import headingView from "./headingView.vue"
import lightNormal from "./lightNormal.vue"
import inlineText from "./inlineText.vue"
import blockquotesView from "./blockquotesView.vue"
export default {
    components:{
        headingView,
        lightNormal,
        inlineText,
        blockquotesView
    }
}
</script>