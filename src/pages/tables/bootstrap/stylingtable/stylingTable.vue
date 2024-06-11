<template>
    <Breadcrumbs main="Bootstrap Tables" title="Bootstrap Styling Tables" />
    <div class="container-fluid">
        <div class="row">
            <defultStyling />
            <headOptions />
            <headPrimary />
            <footerStyling />
            <hoverStripped />
        </div>
    </div>
</template>
<script>
import defultStyling from "./defultStyling.vue"
import headOptions from "./headOptions.vue"
import headPrimary from "./headPrimary.vue"
import footerStyling from "./footerStyling.vue"

import hoverStripped from "./hoverStripped.vue"
export default {
    components: {
        defultStyling,
        headOptions,
        headPrimary,
        footerStyling,

        hoverStripped
    }
}
</script>