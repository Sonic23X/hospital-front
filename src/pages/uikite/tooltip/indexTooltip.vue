<template>
    <Breadcrumbs main="Ui Kits" title="Tooltip"/>
     <div class="container-fluid">
            <div class="row">
                <inlineText/>
                <basicTooltip/>
            </div>
     </div>
</template>
<script>
import inlineText from "./inlineText.vue"
import basicTooltip from "./basicTooltip.vue"
export default {
    components:{
        inlineText,
        basicTooltip
    }
}
</script>