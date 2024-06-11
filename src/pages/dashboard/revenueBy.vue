<template>
     <div class="dash-xl-50 dash-32 box-col-6 col-md-6 col-xl-4">
                <div class="card revenue-category">
                  <div class="card-header card-no-border">
                    <div class="media">
                      <div class="media-body"> 
                        <h5 class="mb-0">Revenue by Category</h5>
                      </div>
                      <div class="icon-box onhover-dropdown"><vue-feather type="more-horizontal"></vue-feather>
                        <div class="icon-box-show onhover-show-div">
                          <ul> 
                            <li> <a>
                                 Done</a></li>
                            <li> <a>
                                 Pending</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="donut-inner">
                      <h5>16,349</h5>
                      <h6>2,174 in pending</h6>
                    </div>
                    <div id="revenue-chart">  <revenueChart/>          </div>
                  </div>
                </div>
              </div>
</template>
<script>
import revenueChart from "./revenueChart"
export default {
    components:{
        revenueChart
    }
}
</script>