<template>
    <Breadcrumbs main="Bonus Ui" title="Animated Modal"/>
      <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Modal with animate.js</h5>
                  </div>
                <animatedmodalBox/>
                </div>
              </div>
            </div>
      </div>
</template>
<script>
import animatedmodalBox from "./animatedmodalBox.vue"
export default {
    components:{
        animatedmodalBox
    }
}
</script>