<template>
     <div class="col-xl-7 col-lg-12 box-col-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <div class="row">
                      <div class="col-9">
                        <h5>Order Status</h5>
                      </div>
                      <div class="col-3 text-end"><i class="text-muted" data-feather="shopping-bag"><vue-feather type="shopping-bag"></vue-feather></i></div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="chart-container">
                      <div id="linechart">
                          <linechart/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import linechart from "./linechart.vue"
export default {
    components:{
        linechart
    }
}
</script>