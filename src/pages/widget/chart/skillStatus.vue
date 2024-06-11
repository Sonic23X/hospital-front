<template>
     <div class="col-xl-4 col-lg-12 box-col-6 xl-50">
                <div class="card">
                  <div class="card-header">
                    <div class="row">
                      <div class="col-9">
                        <h5>Skill Status</h5>
                      </div>
                      <div class="col-3 text-end"><i class="text-muted" data-feather="trending-up"><vue-feather type="trending-up"></vue-feather></i></div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="chart-container">
                      <div id="circlechart">
                           <apexchart
      type="radialBar"
     height="350"
      ref="chart"
      :options="chartOptions"
      :series="series"
    ></apexchart>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#6362e7';
var secondary = localStorage.getItem('secondary_color') || '#ffc500';
export default {
    data(){
        return{
             series: [71, 63],
    chartOptions: {
      chart: {
            type: 'radialBar',
            height: 350,
            offsetY: -30,
            offsetX: 20
        },
        plotOptions: {
            radialBar: {
                size: undefined,
                inverseOrder: false,
                hollow: {
                    margin: 5,
                    size: '48%',
                    background: 'transparent',
                },
                track: {
                    show: true,
                    background: '#f2f2f2',
                    strokeWidth: '10%',
                    opacity: 1,
                    margin: 3
                },
            },
        },
       
        labels: ['Device 1', 'Device 2'],
        legend: {
            show: false,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.5,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        colors:[primary, secondary]
  
    }
        }
    }
}
</script>