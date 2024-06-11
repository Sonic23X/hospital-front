<template>
  <Breadcrumbs main="Gallery" title="Masonry Gallery" />
    <div class="container-fluid">
      <div class="row">
         <masonryView/>
      </div>
    </div>
</template>
<script>
import masonryView from "./masonryView.vue"
export default {
  components:{
    masonryView
  },
    
};
</script>