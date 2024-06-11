<template>
  <apexchart type="line" height="142" ref="chart" :options="chartOptions" :series="series"></apexchart>
</template>
<script>

export default {
  data() {
    return {
      series: [
        {
          name: "Desktops",
          data: [18, 30, 25, 51, 34, 40, 34],
        },
      ],
      chartOptions: {
        chart: {
          height: 142,
          type: "line",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          dropShadow: {
            enabled: true,
            bottom: 2,
            left: 10,
            blur: 6,
            color: '#000',
            opacity: 0.35
          },
        },
        colors: ["#fff"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
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
            bottom: -30,
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

      }
    }
  }
}
</script>