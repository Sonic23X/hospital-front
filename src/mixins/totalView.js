import {chartData2} from "@/data/chart-data"
var primary = localStorage.getItem('primary_color') || '#6362e7';
const totalView = {
    
    data(){
        return{
             series: [
        {
          name: "Series 1",
           data:  chartData2
        }
    ],
    chartOptions: {
           chart: {
        height: 145,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    stroke: {
        curve: 'smooth',
        colors: [primary],
        lineCap: 'round',
        width: 3,
    },
    annotations: {
        points: [
          {
              x: new Date('31 January 2012').getTime(),
              y: 20 ,
            marker: {
              size: 6,
              fillColor: "#fff",
              strokeColor: primary,
              radius: 3,
              strokeWidth: 3,
            },
          }
        ]
      },
      colors: [primary],
    fill: {
        type: 'gradient',
        opacity: 0.1,
        gradient: {
            type: "vertical",
            opacityFrom: 0.65,
            opacityTo: 0.3,
            stops: [0,100]
        },
    },
    yaxis:{
        labels: {
           
            show: false,
        },
    },
    xaxis: {
        type: "datetime",
      
        show: false,
        labels: {
           
            show: false,
        },
        tooltip: {
            enabled: false
          },
        axisBorder: {
            show: false,
        },
        crosshairs: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    tooltip: {
        style: {
          fontSize: '12px',
        },
        x: {
            show: false,
        },
        y: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: false,
        padding: {
            left: -10,
            right: 0,
            bottom: 0,
            top: -35
        }
    },
    responsive: [
        {
          breakpoint: 1600,
          options: {
            chart: {
                height: 105,
            }
          }
        }
      ]
    }
        }
    }
}
  
  export default totalView