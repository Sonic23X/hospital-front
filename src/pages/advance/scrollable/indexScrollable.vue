<template>
     <Breadcrumbs main="Bonus Ui" title="Scrollable"/>
     <div class="container-fluid scrollable-para">
            <div class="row">
                <clickDrag/>
                <smallSize/>
                <bothSide/>
                <horizontalScroll/>
                <alwaysVisible/>
                <verticalScroll/>
            </div>
     </div>
</template>
<script>
import clickDrag from "./clickDrag.vue"
import smallSize from "./smallSize.vue"
import bothSide from "./bothSide.vue"
import horizontalScroll from "./horizontalScroll.vue"
import alwaysVisible from "./alwaysVisible.vue"
import verticalScroll from "./verticalScroll.vue"
export default {
    components:{
        clickDrag,
        smallSize,
        bothSide,
        horizontalScroll,
        alwaysVisible,
        verticalScroll
    }
}
</script>