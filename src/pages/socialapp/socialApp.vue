<template>
      <Breadcrumbs main="Apps" title="Social App"/>
       <div class="container-fluid">
            <div class="user-profile social-app-profile">
                <socialHeader/>
            </div>
       </div>
</template>
<script>
import socialHeader from "./socialHeader.vue"
export default {
    components:{
        socialHeader
    }
}
</script>