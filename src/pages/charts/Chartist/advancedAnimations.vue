<template>
  <div class="col-xl-6 col-md-12 col-sm-12 box-col-6"> 
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Advanced SMIL Animations</h5>
                  </div>
                  <div class="card-body">
                   <chartist
                          class="ct-6 flot-chart-container"
                          ratio=""
                          type="Line"
                          :data="chart1.data"
                          :options="chart1.options"
                          :event-handlers="chart1.eventHandlers">
                  </chartist>
                    
                  </div>
                </div>
              </div> 
        
</template>
<script>
var seq = 0;
  var delays = 80;
  var durations = 500;
  
export default {
    data(){
      return{
         chart1 : {
          data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            series: [
              [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
              [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
              [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
              [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
            ]
          },
          options: {
            low: 0,
            showArea: false,
            fullWidth: true,
          },
          eventHandlers : [{
            event: 'draw',
            fn(data) {
              seq++;
              if(data.type === 'line') {
                data.element.animate({
                  opacity: {
                    begin: seq * delays + 1000,
                    dur: durations,
                    from: 0,
                    to: 1
                  }
                });
              } else if(data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                  y: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.y + 100,
                    to: data.y,
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                  x: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 100,
                    to: data.x,
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'point') {
                data.element.animate({
                  x1: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                  },
                  x2: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                  },
                  opacity: {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'grid') {
                var pos1Animation = {
                  begin: seq * delays,
                  dur: durations,
                  from: data[data.axis.units.pos + '1'] - 30,
                  to: data[data.axis.units.pos + '1'],
                  easing: 'easeOutQuart'
                };
                var pos2Animation = {
                  begin: seq * delays,
                  dur: durations,
                  from: data[data.axis.units.pos + '2'] - 100,
                  to: data[data.axis.units.pos + '2'],
                  easing: 'easeOutQuart'
                };
                var animations = {};
                animations[data.axis.units.pos + '1'] = pos1Animation;
                animations[data.axis.units.pos + '2'] = pos2Animation;
                animations['opacity'] = {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'easeOutQuart'
                };
                data.element.animate(animations);
              }
            }
          }]
        },
      }
    }
}
</script>