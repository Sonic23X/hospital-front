<template>
     <apexchart
      type="donut"
      height="320"
      ref="chart"
      :options="chartOptions"
      :series="series"
    ></apexchart>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#6362e7';
var secondary = localStorage.getItem('secondary_color') || '#ffc500';
export default {
    data(){
        return{
          labels: ['Men', 'Women', 'Accessories','Children','Apperal'],
      series: [44, 55, 41, 17, 15],
    chartOptions: {
  chart: {
        type: 'donut',
        height: 320 ,
      },
      legend:{
        position:'bottom'
      },
      dataLabels: {
        enabled: false,
      },      
      states: {          
        hover: {
          filter: {
            type: 'darken',
            value: 1,
          }
        }           
      },
      stroke: {
        width: 0,
      },
      responsive: [
            {
              breakpoint: 1661,
              options: {
                chart: {
                    height:310,
                }
              }
            },            
            {
              breakpoint: 481,
              options:{
                chart:{
                    height:280,
                }
              }
            }

        ],     
      colors:[primary, secondary,"#7dc006","#1d97ff","#ff8819"],
    }
        }
    }
}
</script>