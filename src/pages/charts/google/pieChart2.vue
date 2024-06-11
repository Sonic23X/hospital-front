<template>
     <div class="col-sm-12 col-xl-6 box-col-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Pie Chart <span class="digits">3</span></h5>
                  </div>
                  <div class="card-body p-0 chart-block">
                    <div class="chart-overflow" id="pie-chart4">
                        <GChart
                      class="chart-overflow" 
                      id="pie-chart4"
                      type="PieChart"
                      :data="pie_chart.chartData_3"
                      :options="pie_chart.options_3"
                    />
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#6362e7';
var secondary = localStorage.getItem('secondary_color') || '#ffc500';

import { GChart } from "vue-google-charts";
export default {
    components:{
        GChart 
    },
    data(){
        return{
              chartsLib: null, 
               pie_chart: {
                    chartData_3: [
            ['Language', 'Speakers (in millions)'],
            ['Assamese', 13],
            ['Bengali', 83], 
            ['Bodo', 1.4],
            ['Dogri', 2.3], 
            ['Gujarati', 46], 
            ['Hindi', 300],
            ['Kannada', 38], 
            ['Kashmiri', 5.5], 
            ['Konkani', 5],
            ['Maithili', 20], 
            ['Malayalam', 33], 
            ['Manipuri', 1.5],
            ['Marathi', 72], 
            ['Nepali', 2.9], 
            ['Oriya', 33],
            ['Punjabi', 29], 
            ['Sanskrit', 0.01], 
            ['Santhali', 6.5],
            ['Sindhi', 2.5], 
            ['Tamil', 61], 
            ['Telugu', 74], 
            ['Urdu', 52]
          ],
           options_3: { 
            title: 'Indian Language Use',
            legend: 'none',
            width:'100%',
            height: 400,
            pieSliceText: 'label',
            slices: {  4: { offset: 0.2 },
                       12: { offset: 0.3 },
                       14: { offset: 0.4 },
                       15: { offset: 0.5 },
            },
             colors: ["#dc3545", primary , secondary , "#51bb25", "#a927f9", "#f8d62b","#dc3545", primary , "#f8d62b", "#51bb25", primary , secondary ,"#51bb25", primary , "#a927f9", "#f8d62b", primary , primary, "#a927f9", secondary , primary , "#51bb25"]
            
          },
               }
        }
    }
}
</script>