<template>
     <div class="col-xl-7 col-md-12 box-col-12">
                <div class="card o-hidden">
                  <div class="card-header pb-0">
                    <div class="media">
                      <div class="media-body">
                        <h5>Marketing Expenses</h5>
                      </div>
                      <div class="icon-box onhover-dropdown"><vue-feather type="more-horizontal"></vue-feather>
                        <div class="icon-box-show onhover-show-div">
                          <ul> 
                            <li> <a>
                                 Done</a></li>
                            <li> <a>
                                 Pending</a></li>
                            <li> <a>
                                 Rejected</a></li>
                            <li> <a>In Progress</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bar-chart-widget">
                    <div class="bottom-content card-body">
                      <div class="row">
                        <div class="col-12">
                          <div id="chart-widget4"><marketingChart/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import marketingChart from "./marketingChart.vue"
export default {
    components:{
        marketingChart
    }
}
</script>