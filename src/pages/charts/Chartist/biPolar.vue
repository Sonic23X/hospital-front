<template>
     <div class="col-xl-6 col-md-12 col-sm-12 box-col-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Bi-polar Line chart with area only</h5>
                  </div>
                  <div class="card-body">
                   <chartist
                          class="ct-5 flot-chart-container"
                          ratio=""
                          type="Line"
                          :data="chart4.data"
                          :options="chart4.options">
                  </chartist>
                  </div>
                </div>
              </div>
</template>
<script>
export default {
   data(){
       return{
        chart4 : {
          data: {
            abels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
              [1, 2, 3, 1, -2, 0, 1, 0],
              [-2, -1, -2, -1, -2.5, -1, -2, -1],
              [0, 0, 0, 1, 2, 2.5, 2, 1],
              [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
            ]
          },
          options: {
            high: 3,
            low: -3,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
              showLabel: false,
              showGrid: false
            },
          },
        },
       }
   } 
}
</script>