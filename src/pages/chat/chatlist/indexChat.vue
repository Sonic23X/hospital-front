<template>
     <Breadcrumbs main="Chat" title="Chat App" />
     <div class="container-fluid">
            <div class="row">
                <searchChat/>
                <chatBody/>
            </div>
     </div>
</template>
<script>
import searchChat from "./searchChat.vue"
import chatBody from "./chatBody.vue"
export default {
    components:{
        searchChat,
        chatBody
    }
}
</script>