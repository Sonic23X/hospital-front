<template>
     <div class="col-sm-12 col-xl-6 box-col-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Pie Chart </h5>
                  </div>
                  <div class="card-body apex-chart">
                    <div id="piechart">
              <apexchart
                  width="380"
                  type="pie"
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
var secondary = localStorage.getItem('secondary_color') || '#ffc500';
export default {
    data(){
        return{
            series: [44, 55, 13, 43, 22],
            chartOptions:{
                 chart: {
        width: 380,
        type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    
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
    colors:[primary, secondary,'#51bb25', '#a927f9', '#f8d62b']
            }
        }
    }
}
</script>