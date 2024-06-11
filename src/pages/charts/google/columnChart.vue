<template>
  <div class="col-sm-12 col-xl-6 box-col-6">
    <div class="card">
      <div class="card-header">
        <h5>Column Chart <span class="digits">1 </span></h5>
      </div>
      <div class="card-body chart-block">
        <GChart class="chart-overflow" id="column-chart1" type="ColumnChart" :settings="{ packages: ['bar'] }"
          :data="column_chart.chartData_1" :options="verticalChartOptions"
          :createChart="(el, google) => new google.charts.Bar(el)" @ready="onChartReady" />
      </div>
    </div>
  </div>
  <div class="col-sm-12 col-xl-6 box-col-6">
    <div class="card">
      <div class="card-header">
        <h5>Column Chart <span class="digits">2</span></h5>
      </div>
      <div class="card-body chart-block">
        <GChart class="chart-overflow" id="column-chart2" type="ColumnChart" :settings="{ packages: ['bar'] }"
          :data="column_chart.chartData_1" :options="horizontalChartOptions"
          :createChart="(el, google) => new google.charts.Bar(el)" @ready="onChartReady" />
      </div>
    </div>
  </div>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#6362e7';
var secondary = localStorage.getItem('secondary_color') || '#ffc500';
import { GChart } from "vue-google-charts";
export default {
  components: { GChart },
  data() {
    return {
      chartsLib: null,
      column_chart: {
        chartData_1: [
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1e3, 400, 250],
          ['2023', 1170, 460, 300],
          ['2016', 660, 1120, 400],
          ['2023', 1030, 540, 450]
        ],
      },
    }
  },
  computed: {
    verticalChartOptions() {
      if (!this.chartsLib) return null;
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2023'
        },
        bars: 'vertical',
        vAxis: {
          format: 'decimal'
        },
        height: 400,
        width: '100%',
        colors: [primary, secondary, "#51bb25"]
      });
    },
    horizontalChartOptions() {
      if (!this.chartsLib) return null;
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2023'
        },
        bars: 'horizontal',
        vAxis: {
          format: 'decimal'
        },
        height: 400,
        width: '100%',
        colors: [primary, secondary, "#51bb25"]
      });
    }
  },
  methods: {
    onChartReady(chart, google) {
      this.chartsLib = google;
    }
  }
}
</script>