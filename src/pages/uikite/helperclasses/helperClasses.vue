<template>
     <Breadcrumbs main="Ui Kits" title="Helper Classes"/>
     <div class="container-fluid">
            <div class="row">
                <paddingView/>
                <paddingLeft/>
                <paddingTop/>
                <marginLeft/>
                <marginTop/>
                <verticalAlign/>
                <textColor/>
                <backgroundColor/>
                <borderRadius/>
                <fontSize/>
                <allBorders/>
                <borderWidth/>
            </div>
     </div>
</template>
<script>
import paddingView from "./paddingView.vue"
import paddingLeft from "./paddingLeft.vue"
import paddingTop from "./paddingTop.vue"
import marginLeft from "./marginLeft.vue"
import marginTop from "./marginTop.vue"
import verticalAlign from "./verticalAlign.vue"
import textColor from "./textColor.vue"
import backgroundColor from "./backgroundColor.vue"
import borderRadius from "./borderRadius.vue"
import fontSize from "./fontSize.vue"
import allBorders from "./allBorders.vue"
import borderWidth from "./borderWidth.vue"
export default {
    components:{
        paddingView,
        paddingLeft,
        paddingTop,
        marginLeft,
        marginTop,
        verticalAlign,
        textColor,
        backgroundColor,
        borderRadius,
        fontSize,
        allBorders,
        borderWidth
    }
}
</script>