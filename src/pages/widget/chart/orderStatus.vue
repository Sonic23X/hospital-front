<template>
     <div class="col-xl-8 col-lg-12 box-col-6 xl-50">
                <div class="card">
                  <div class="card-header">
                    <div class="row">
                      <div class="col-9">
                        <h5>Order Status</h5>
                      </div>
                      <div class="col-3 text-end"><i class="text-muted" data-feather="shopping-bag"><vue-feather type="shopping-bag"></vue-feather></i></div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="chart-container">
                      <div id="progress1"><progressChart1/></div>
                      <div id="progress2"><progressChart2/></div>
                      <div id="progress3"><progressChart3/></div>
                      <div id="progress4"><progressChart4/></div>
                      <div id="progress5">  <progressChart5/>  </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import progressChart1 from "./progressChart1.vue"
import progressChart2 from "./progressChart2.vue"
import progressChart3 from "./progressChart3.vue"
import progressChart4 from "./progressChart4.vue"
import progressChart5 from "./progressChart5.vue"
export default {
    components:{
        progressChart1,
        progressChart2,
        progressChart3,
        progressChart4,
        progressChart5
    }
}
</script>