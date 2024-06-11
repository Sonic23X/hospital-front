<template>
    <Breadcrumbs main="Bonus Ui" title="Basic Card"/>
    <div class="container-fluid">
            <div class="row">
                <basicCard1/>
                <basicCard2/>
            </div>
    </div>
</template>
<script>
import basicCard1 from "./basicCard1.vue"
import basicCard2 from "./basicCard2.vue"
export default {
    components:{
        basicCard1,
        basicCard2
    }
}
</script>