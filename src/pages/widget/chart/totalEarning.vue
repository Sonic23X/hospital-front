<template>
     <div class="col-xl-5 col-md-12 box-col-12">
                <div class="card o-hidden">
                  <div class="card-header pb-0">
                    <div class="media">
                      <div class="media-body">
                        <h5>Total Earning</h5>
                      </div>
                      <div class="icon-box onhover-dropdown"><vue-feather type="more-horizontal"></vue-feather>
                        <div class="icon-box-show onhover-show-div">
                          <ul> 
                            <li> <a> Done</a></li>
                            <li> <a> Pending</a></li>
                            <li> <a> Rejected</a></li>
                            <li> <a>In Progress</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bar-chart-widget">
                    <div class="top-content bg-primary"></div>
                    <div class="bottom-content card-body">
                      <div class="row">
                        <div class="col-12">
                          <div id="chart-widget5"><totalEarning1/> </div>
                        </div>
                      </div>
                      <div class="row text-center">
                        <div class="col-4 b-r-light">
                          <div><span class="font-primary">12%<i class="icon-angle-up f-12 ms-1"></i></span><span class="text-muted block-bottom">Year</span>
                            <h4 class="num m-0"><span class="counter color-bottom">
                                <number
                class="bold counter color-bottom"
                ref="number1"
                :from="0"
                :to="3659"
                :duration="5"
                :delay="0"
                easing="Power1.easeOut"
              /></span>M</h4>
                          </div>
                        </div>
                        <div class="col-4 b-r-light">
                          <div><span class="font-primary">15%<i class="icon-angle-up f-12 ms-1"></i></span><span class="text-muted block-bottom">Month</span>
                            <h4 class="num m-0"><span class="counter color-bottom">
                                <number
                class="bold counter color-bottom"
                ref="number1"
                :from="0"
                :to="698"
                :duration="5"
                :delay="0"
                easing="Power1.easeOut"
              /></span>M</h4>
                          </div>
                        </div>
                        <div class="col-4">
                          <div><span class="font-primary">34%<i class="icon-angle-up f-12 ms-1"></i></span><span class="text-muted block-bottom">Today</span>
                            <h4 class="num m-0"><span class="counter color-bottom">
                                <number
                class="bold counter color-bottom"
                ref="number1"
                :from="0"
                :to="9361"
                :duration="5"
                :delay="0"
                easing="Power1.easeOut"
              /></span>M</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import totalEarning1 from "./totalEarning1.vue"
export default {
    components:{
        totalEarning1
    }
}
</script>