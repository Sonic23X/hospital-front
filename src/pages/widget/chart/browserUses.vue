<template>
    <div class="col-sm-12 box-col-12">
                <div class="donut-chart-widget">
                  <div class="card">
                    <div class="card-header pb-0">
                      <div class="media">
                        <div class="media-body">
                          <h5>Browser Uses</h5>
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
                              <li> <a>In Progress  </a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div id="chart-widget13">
                      <browserChart/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import browserChart from "./browserChart.vue"
export default {
    components:{
        browserChart
    }
}
</script>