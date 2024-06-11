var primary = localStorage.getItem('primary_color') || '#6362e7';
var secondary = localStorage.getItem('secondary_color') || '#ffc500';
const transactionChart = {
    
    data(){
        return{
           series: [{
        name: 'Males',
        data: [0, 20, 40, 60, 90, 70, 45, 30
        ]
    },
    {
        name: 'Females',
        data: [0,-20, -40, -60, -90, -70, -45, -30
        ]
    }
    ],
    chartOptions: {
         chart: {
        toolbar:{
            show: false
        },
        type: 'bar',
        height: 155,
        stacked: true,
    },
    colors: [primary, secondary ],
    plotOptions: {
        bar: {
            horizontal: true,
            startingShape: 'rounded',
            endingShape: 'rounded',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1,
        borderRadius: 40,
        colors: ["transparent"]
    },

    grid: {
        borderColor: '#1e2f6533',
        xaxis: {
            lines: {
                show: true,
                Color: '#1e2f6533',
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
        padding: {
            top:  -20,
            right: 0,
            bottom: -10,
            left: 0
        }, 
      
    },   
    yaxis: {
        show: false,
    },
    legend: {
        show: false,
    },
    tooltip: {           
        x: {
            formatter: function (val) {
                return val
            }
        },
        y: {
            formatter: function (val) {
                return Math.abs(val) + "%"
            }
        }
    },
    states:{          
      hover:{
        filter:{
          type: 'darken',
          value: 1,
        }
      }           
    },
    xaxis: {
        position: 'top',
        categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59'
        ],
        labels: {
            formatter: function (val) {
                return Math.abs(Math.round(val)) 
            },
            offsetX: 0,
            offsetY: 5,
            rotate: 0,
            style: {
                colors: ['#1e2f6533'],
                fontSize: '12px',
                fontWeight: 400,
            },
        },
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        },
    },

    }

        }
    }
}
  
  export default transactionChart