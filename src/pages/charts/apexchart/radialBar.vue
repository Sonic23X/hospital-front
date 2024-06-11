<template>
    <div class="col-sm-12 col-xl-6 box-col-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Radial Bar Chart</h5>
                  </div>
                  <div class="card-body">
                    <div id="circlechart">
                        <apexchart
                  height="350"
                  type="radialBar"
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
            series: [44, 55, 67, 83],
            chartOptions:{
                 chart: {
        height: 350,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function () {
                        return 249
                    }
                }
            }
        }
    },
    
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    colors:[ secondary , '#51bb25', '#f8d62b', primary ]

            }
        }
    }
}
</script>