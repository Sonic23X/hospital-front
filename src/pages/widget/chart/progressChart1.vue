<template>
    <apexchart type="bar" height="70" ref="chart" :options="chartOptions" :series="series"></apexchart>
</template>
<script>

export default {
    data() {
        return {
            series: [{
                name: 'Process 1',
                data: [44]
            }],
            chartOptions: {
                chart: {
                    height: 70,
                    type: 'bar',
                    stacked: true,
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '20%',
                        colors: {
                            backgroundBarColors: ['#f2f2f2']
                        }
                    },
                },
                colors: ["#6362e7"],
                stroke: {
                    width: 0,
                },
                fill: {
                    colors: ["#6362e7"],
                    type: 'gradient',
                    gradient: {
                        gradientToColors: ["#6362e7"]
                    }
                },

                title: {
                    floating: true,
                    offsetX: -10,
                    offsetY: 5,
                    text: 'Process 1'
                },
                subtitle: {
                    floating: true,
                    align: 'right',
                    offsetY: 0,
                    text: '44%',
                    style: {
                        fontSize: '20px'
                    }
                },
                tooltip: {
                    enabled: false
                },
                xaxis: {
                    categories: ['Process 1'],
                },
                yaxis: {
                    max: 100
                },


            }
        }
    }
}
</script>