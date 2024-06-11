<template>
     <apexchart type="bar" height="263" ref="chart" :options="chartOptions" :series="series"
    ></apexchart>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#6362e7';
var secondary = localStorage.getItem('secondary_color') || '#ffc500';
export default {
    data(){
        return{
          series: [{
    name: 'Revenue',   
    data: [19, 28, 31, 25, 35, 18, 23]
  }, {
    name: 'Free Cash Flow',   
    data: [25, 31, 35, 29, 39, 22, 28]
  }],
    chartOptions: {
       chart: {
    type: 'bar',
    height: 263,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '20%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false,
  },
  colors: [primary, secondary],
  stroke: {
    show: true,
    width: 1,
    colors: ['transparent']
  },
  states: {          
      hover: {
        filter: {
          type: 'darken',
          value: 1,
        }
      }           
    },
  xaxis: {
    categories: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    labels: {
      offsetX:  0,
      offsetY: -6,
      style: {
        colors: "#8E97B2",
        fontWeight: 400,
        fontSize: '10px',
        fontFamily: 'roboto'
      },
    },
    axisBorder: {
      show: false,

    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {   
    tooltip: {
      enabled: true
    },
    labels: {
      formatter: function (value) {
        return value + "k";
      },
    },
  },
  fill: {
    opacity: 1
  }, 
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  },
    }
        }
    }
}
</script>