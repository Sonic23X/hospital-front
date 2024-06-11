<template>
     <Breadcrumbs main="Chat" title="Video Chat" />
     <div class="container-fluid">
            <div class="row">
                <searchChat/>
                <chatBody/>
            </div>
     </div>
</template>
<script>
import searchChat from "../chatlist/searchChat.vue"
import chatBody from "./chatBody.vue"
export default {
    components:{
        chatBody,
        searchChat
    }
}
</script>