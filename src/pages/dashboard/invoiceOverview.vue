<template>
     <div class="dash-xl-33 dash-lg-50 box-col-6 col-md-6 col-xl-5">
                <div class="card pb-0 invoice-overviwe">                
                  <div class="card-header card-no-border">
                    <div class="header-top">
                      <h5 class="m-0">Invoice Overview</h5>
                      <div class="icon-box onhover-dropdown"><vue-feather type="more-horizontal"></vue-feather>
                        <div class="icon-box-show onhover-show-div">
                          <ul> 
                            <li> <a>
                                 Today</a></li>
                            <li> <a>
                                 Yesterday</a></li>
                            <li> <a>
                                 Tommorow</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body pt-0">
                    <div id="invoice-overviwe-chart"><invoiceChart/></div>
                  </div>
                </div>
              </div>
</template>
<script>
import invoiceChart from "./invoiceChart.vue"
export default {
    components:{
invoiceChart
    }
}
</script>