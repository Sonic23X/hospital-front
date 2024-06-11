<template>
      <div class="dash-xl-33 dash-lg-50 box-col-6 col-md-6 col-xl-3">
                <div class="card sales-state">
                  <div class="row m-0">
                    <div class="col-12 p-0"> 
                      <div class="card bg-primary">
                        <div class="card-header card-no-border bg-primary"> 
                          <div class="media media-dashboard">
                            <div class="media-body"> 
                              <h5 class="mb-0 text-light">Sales Stats</h5>
                            </div>
                            <div class="icon-box"><vue-feather type="more-horizontal"></vue-feather></div>
                          </div>
                        </div>
                        <div class="card-body p-0">
                          <div id="sales-state-chart"><salesChart/></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 p-0">
                      <div class="sales-small-chart">
                        <div class="card-body p-0 m-auto">
                        
                            <smallChart/>
                           
                          <h6>300</h6><span>Watch Sale  </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 p-0">
                      <div class="sales-small-chart">
                        <div class="card-body p-0 m-auto">
                         <smallChart2/>
                          <h6>1120</h6><span>Phone Sale</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 p-0">
                      <div class="sales-small-chart">
                        <div class="card-body p-0 m-auto">
                        <smallChart3/>
                          <h6>530</h6><span>Tablet Sale </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import salesChart from "./salesChart.vue"
import smallChart from "./smallChart.vue"
import smallChart2 from "./smallChart2.vue"
import smallChart3 from "./smallChart3.vue"
export default {
    components:{
        salesChart,
        smallChart,
        smallChart2,
        smallChart3
    }
}
</script>