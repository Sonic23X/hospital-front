<template>
     <div class="dash-xl-50 dash-31 box-col-6 col-md-6 col-xl-3">
                <div class="card total-sale">
                  <div class="card-header card-no-border">
                    <div class="media">
                      <div class="media-body"> 
                        <h5 class="mb-0">Total sale</h5>
                      </div>
                      <div class="icon-box onhover-dropdown"><vue-feather type="more-horizontal"></vue-feather>
                        <div class="icon-box-show onhover-show-div">
                          <ul>
                            <li><a>Done</a></li>
                            <li> <a>
                                 Pending</a></li>
                            <li> <a>
                                 Rejected</a></li>
                            <li> <a>In Progress</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="animat-block">
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-body pt-0"> 
                    <div class="sale-main">
                      <div class="sale-left">
                        <h6 class="font-danger"><i class="icon-arrow-down"></i><span>0.45%</span></h6>
                        <h5 class="font-primary">680.96</h5>
                      </div>
                      <div class="sale-right">
                        <div id="total-sales-chart">
                            <salechart/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import salechart from "./salechart.vue"

export default {
  components:{
    salechart
  }
   
}
</script>