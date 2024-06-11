<template>
    <Breadcrumbs main="Apps" title="File Manager" />
     <div class="container-fluid">
            <div class="row">
                <fileManeger/>
                <fileManeger1/>
            </div>
     </div>
</template>
<script>
import fileManeger from "./fileManeger.vue"
import fileManeger1 from "./fileManeger1.vue"
export default {
    components:{
        fileManeger,
        fileManeger1
    }
}
</script>