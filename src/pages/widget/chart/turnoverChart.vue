<template>
    <apexchart type="area" height="320" ref="chart" :options="chartOptions" :series="series"></apexchart>
</template>
<script>
import chart from "../../../data/chart.json"
var primary = localStorage.getItem('primary_color') || '#6362e7';

export default {
    data() {
        return {
            series: [{
                name: "STOCK ABC",
                data: chart.monthDataSeries1.prices
            }],
            chartOptions: {
                chart: {
                    height: 320,
                    type: 'area',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    colors: [primary],
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: 'vertical',
                        shadeIntensity: 0.4,
                        inverseColors: false,
                        opacityFrom: 0.9,
                        opacityTo: 0.8,
                        stops: [0, 100]
                    }
                },
                title: {
                    text: 'Fundamental Analysis of Stocks',
                    align: 'left'
                },
                colors: [primary],
                labels: chart.monthDataSeries1.dates,
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    opposite: false
                },
                legend: {
                    horizontalAlign: 'left'
                }
            }
        }
    }
}
</script>