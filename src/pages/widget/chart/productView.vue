<template>
     <div class="col-xl-4 col-md-12 box-col-12">
                <div class="card o-hidden">
                  <div class="chart-widget-top">
                    <div class="card-body pb-0">
                      <div class="row">
                        <div class="col-8">
                          <h6 class="f-w-600 font-success">PRODUCTS</h6><span class="num"><span class="counter"><number
                  class="bold"
                  ref="number1"
                  :from="0"
                  :to="68"
                  :duration="5"
                  :delay="0"
                  easing="Power1.easeOut" /></span>%<i class="icon-angle-up f-12 ms-1"></i></span>
                        </div>
                        <div class="col-4 text-end">
                          <h4 class="num total-value"><span class="counter"><number
                  class="bold counter"
                  ref="number1"
                  :from="0"
                  :to="93"
                  :duration="5"
                  :delay="0"
                  easing="Power1.easeOut" /></span>M</h4>
                        </div>
                      </div>
                    </div>
                    <div id="chart-widget3">
                      <div class="flot-chart-placeholder" id="chart-widget-top-third"><productChart/></div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import productChart from "./productChart.vue"
export default {
    components:{
        productChart
    }
}
</script>