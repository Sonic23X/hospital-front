var primary = localStorage.getItem('primary_color') || '#6362e7';
const weeklyChart = {
    
    data(){
        return{
           series: [
      {
        name:'Statistics',
        data:[500,600, 200, 700, 750, 500]
      },
      {
        name: 'Statistics',
        data: [800,800,800,800,800,800]
      }
    ],
    chartOptions: {
          chart:{
      type:'bar',
      height:230,
      stacked:true,
      stackType: '100%',
      toolbar:{
        show:false,
      }
    }, 
    plotOptions: {
      bar:{       
        horizontal: false,
        columnWidth: '20px',
        borderRadius: 5,
      },
    }, 
    grid: {
      show:false,                  
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    dataLabels:{
      enabled: false,
    },
    fill: {
      opacity: 1
    },
    legend: {
      show:false
    },    
    states: {          
      hover: {
        filter: {
          type: 'darken',
          value: 1,
        }
      }           
    },
    colors:[primary,'#f4f6fd'],
    yaxis: {
      tickAmount: 3,
      min: 0 ,
      max: 800 ,      
      
      axisBorder:{
       show:false,
     },
      axisTicks:{
        show: false,
      },
    },
    xaxis:{     
      categories:[
        'M','T','W','T','F','S'
      ],
      axisBorder:{
       show:false,
     },
    axisTicks:{
        show: false,
      },
    },
     
    responsive: [
        {
          breakpoint: 1661,
          options:{
            chart: {
                height: 420,
            }
          }
        },
        {
          breakpoint: 1366,
          options:{
            chart: {
                height: 435,
            }
          }
        },
        {
          breakpoint: 1101,
          options:{
            chart: {
                height: 250,
            }
          }
        },
        {
          breakpoint: 1007,
          options:{
            chart: {
                height: 435,
            }
          }
        },
        {
          breakpoint: 992,
          options:{
            chart: {
                height: 385,
            }
          }
        },
        {
          breakpoint: 768,
          options:{
            chart:{
                height: 300,
            }
          }
        },{
          breakpoint: 576,
          options:{
            chart:{
                height: 250,
            }
          }
        }

      ]    
    }
        }
    }
}
  
  export default weeklyChart