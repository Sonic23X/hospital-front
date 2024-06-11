<template>
     <Breadcrumbs main="Bonus Ui" title="Image Cropper"/>
      <div class="container-fluid">
            <div class="img-cropper">
              <div class="row">
                <div class="col-sm-12">
                    <cropperView/>
                </div>
            </div>
            </div>
      </div>
</template>
<script>
import cropperView from "./cropperView.vue"
export default {
   components:{
       cropperView
   } 
}
</script>