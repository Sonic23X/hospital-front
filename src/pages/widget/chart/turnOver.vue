<template>
     <div class="xl-50 col-xl-5 col-lg-12">
                <div class="small-chart-widget chart-widgets-small">
                  <div class="card">
                    <div class="card-header pb-0">
                      <div class="media">
                        <div class="media-body">
                          <h5>Turnover</h5>
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
                    <div class="card-body">
                      <div class="chart-container">
                        <div class="row">
                          <div class="col-12">
                            <div id="chart-widget7"><turnoverChart/></div>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import turnoverChart from "./turnoverChart.vue"
export default {
    components:{
        turnoverChart
    }
}
</script>