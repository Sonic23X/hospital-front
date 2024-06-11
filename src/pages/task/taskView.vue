<template>
     <Breadcrumbs main="Apps" title="Tasks"/>
      <div class="container-fluid">
            <div class="email-wrap bookmark-wrap">
              <div class="row">
                  <taskSidebar/>
              </div>
            </div>
      </div>
</template>
<script>
import taskSidebar from "./taskSidebar.vue"
export default {
    components:{
        taskSidebar
    }
}
</script>