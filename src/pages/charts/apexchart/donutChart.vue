<template>
    <div class="col-sm-12 col-xl-6 box-col-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Donut Chart</h5>
                  </div>
                  <div class="card-body apex-chart">
                    <div id="donutchart">
                <apexchart
                  width="380"
                  type="donut"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
              
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#6362e7';
export default {
    data(){
        return{
          series: [44, 55, 41, 17, 15],
          chartOptions: {
            chart: {
              type: 'donut',
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }],
            colors:['#dc3545', '#f8d62b',primary, '#51bb25', '#a927f9']
          },

    
    }

        }
    }

</script>