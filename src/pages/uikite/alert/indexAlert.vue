<template>
    <Breadcrumbs main="Ui Kits" title="Alert"/>
    <div class="container-fluid">
            <div class="row">
                <themeColor/>
                <alertIcon/>
                <dismissingView/>
                <outlineDark/>
                <lconInverse/>
                <additionalContent/>
            </div>
    </div>
</template>
<script>
import themeColor from "./themeColor.vue"
import alertIcon from "./alertIcon.vue"
import dismissingView from "./dismissingView.vue"
import outlineDark from "./outlineDark.vue"
import lconInverse from "./lconInverse.vue"
import additionalContent from "./additionalContent"
export default {
    components:{
        themeColor,
        alertIcon,
        dismissingView,
        outlineDark,
        lconInverse,
        additionalContent
    }
}
</script>