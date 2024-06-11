<template>
     <chartist
                        class="sales-small sales-small-2"
                          ratio=""
                          type="Bar"
                          :data="chart8.data"
                          :options="chart8.options"
                          :event-handlers="chart8.eventHandlers">
                  </chartist>
</template>
<script>
export default {
    data(){
        return{
     chart8 : {
          data: {
           labels: ['M', 'T', 'W', 'T', 'F', 'S', 'M'],
  series: [
    [4, 9, 8, 10, 7, 12],
    [10, 5, 6, 4, 7, 2]
  
  ]
          },
          options: {
           stackBars: true,

    chartPadding: {
      top: -15,
      right: 0,
      bottom: -15,
      left: -35
    },
    axisX: {
      showGrid: false,
    },
    axisY: {
      low: 0,
      showGrid: false,
      labelInterpolationFnc: function (value) {
        return (value / 1);
      }
    }

          },
          eventHandlers : [{
               event: 'draw',
            fn(data) {
                 if (data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 3px ; stroke-linecap: round'
      });
    }
            }
          }]
        },
        }
    }
}
</script>