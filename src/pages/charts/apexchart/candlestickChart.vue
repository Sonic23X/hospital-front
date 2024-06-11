<template>
    <div class="col-sm-12 col-xl-12 box-col-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Candlestick Chart </h5>
                  </div>
                  <div class="card-body">
                    <div id="candlestick">
                         <apexchart
              type="candlestick"
              height="350"
              :series="series"
              :options="chartOptions"
            ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import {chartData} from "@/data/chart-data"
var primary = localStorage.getItem('primary_color') || '#6362e7';
var secondary = localStorage.getItem('secondary_color') || '#ffc500';
export default {
    data(){
        return{
series: [{
           data: chartData
           }],
            chartOptions: { 
                chart: {
        height: 350,
        type: 'candlestick',
        toolbar:{
          show: false
        }
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: primary,
                downward: secondary
            }
        }
    },
    title: {
        text: 'CandleStick Chart',
        align: 'left'
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        tooltip: {
            enabled: true
        }
    },
    colors:['#000000']
            }
        }
    },
    
}
</script>