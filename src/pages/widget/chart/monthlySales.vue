<template>
               <div class="xl-50 col-xl-5 col-lg-12">
                <div class="small-chart-widget chart-widgets-small">
                  <div class="card">
                    <div class="card-header pb-0">
                      <div class="media">
                        <div class="media-body">
                          <h5>Monthly Sales</h5>
                        </div>
                        <div class="icon-box onhover-dropdown"><vue-feather type="more-horizontal"></vue-feather>
                          <div class="icon-box-show onhover-show-div">
                            <ul> 
                              <li> <a>
                                   Done</a></li>
                              <li> <a>
                                   Pending</a></li>
                              <li> <a>
                                   Rejected</a></li>
                              <li> <a>In Progress  </a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="chart-container">
                        <div class="row">
                          <div class="col-12">
                            <div id="chart-widget8">
                                <apexchart
                            type="radar"
                            height="300"
                            ref="chart"
                            :options="chartOptions"
                            :series="series"
                           ></apexchart>
                            </div>
                          </div>
                        </div>
                      </div>
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
        series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
    }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
    }],
    chartOptions: {
      fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'Reflected',
            shadeIntensity: 0.1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100]
        }
    },
    colors:[primary, secondary, '#51bb25'],
    chart: {
        height: 300,
        type: 'radar',
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
        }
    },
    title: {
        text: 'Radar Chart - Multi Series'
    },
    stroke: {
        width: 0
    },
    markers: {
        size: 0
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    }
        }
    }
}
</script>