<template>
      <div class="col-xl-5 col-lg-12 box-col-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <div class="row">
                      <div class="col-9">
                        <h5>Finance</h5>
                      </div>
                      <div class="col-3 text-end"><i class="text-muted" data-feather="navigation"><vue-feather type="navigation"></vue-feather></i></div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="chart-container">
                      <div id="columnchart">
                         <financeChart/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import financeChart from "./financeChart.vue"
export default {
    components:{
        financeChart
    }
}
</script>