<template>
  <apexchart type="line" height="95" ref="chart" :options="chartOptions" :series="series"></apexchart>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#6362e7';

export default {
  data() {
    return {
      series: [
        {
          name: "Desktops",
          data: [25, 12, 9, 16, 10, 21, 55, 104, 64, 70, 25],
        },
      ],
      chartOptions: {
        chart: {
          height: 95,
          type: "line",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          dropShadow: {
            enabled: true,
            top: 0,
            left: 6,
            blur: 4,
            color: '#6362e7',
            opacity: 0.20
          },
        },
        colors: [primary],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          lineCap: "butt"
        },

        tooltip: {
          enabled: false,
        },

        grid: {
          yaxis: {
            lines: {
              show: false,
            },
          },
          padding: {
            left: -10,
            right: 0,
            bottom: 0,
            top: -30
          }
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
        responsive: [
          {
            breakpoint: 421,
            options: {
              chart: {
                height: 60,
              }
            }
          },
        ],

      }
    }
  }
}
</script>