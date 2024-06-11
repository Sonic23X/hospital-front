<template>
    <Breadcrumbs main="Bonus Ui" title="Dropzone"/>
    <div class="container-fluid">
            <div class="row">
                <singleUpload/>
                <multiUpload/>
                <fileType/>
            </div>
    </div>
</template>
<script>
import singleUpload from "./singleUpload.vue"
import multiUpload from "./multiUpload.vue"
import fileType from "./fileType.vue"
export default {
    components:{
        singleUpload,
        multiUpload,
        fileType
    }
}
</script>