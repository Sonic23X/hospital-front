<template>
     <apexchart
      type="area"
     height="170"
      ref="chart"
      :options="chartOptions"
      :series="series"
    ></apexchart>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#6362e7';
export default {
    data(){
        return{
   series: [
            {
                data: [4, 2, 7, 8, 10, 12, 14]
            }
        ],
    chartOptions: {
        chart: {
            toolbar: {
                show: false
            },
            height: 170,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            show: false,
            type: 'datetime',
            categories: ["2023-09-19T00:00:00", "2023-09-19T01:30:00", "2023-09-19T02:30:00", "2023-09-19T03:30:00", "2023-09-19T04:30:00", "2023-09-19T05:30:00", "2023-09-19T06:30:00"],
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            
            labels: {
                show: false,
            },
        },

        grid: {
            show: false,
            padding: {
                left: -10,
                right: 0,
                bottom: -20
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 0.8,
                opacityTo: 0.2,
                stops: [0, 100]
            },

        },
        colors:[primary],
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
  
    }
        }
    }
}
</script>