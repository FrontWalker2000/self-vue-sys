<template>
  <div class="map_cont">
    <div id="mapChart" ref="myChart"></div>
  </div>
</template>
<script>
import 'echarts-gl'
export default {
  name: 'eCharts',
  data() {
    return {
      msg: 'map',
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('mapChart'))
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          left: 'center',
          top: 'middle',
        },
        visualMap: {
          show: false,
          dimension: 2,
          min: -1,
          max: 1,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          }
        },
        xAxis3D: {},
        yAxis3D: {},
        zAxis3D: {},
        grid3D: {},
        series: [{
          type: 'surface',
          parametric: true,
          // shading: 'albedo',
          parametricEquation: {
            u: {
              min: -Math.PI,
              max: Math.PI,
              step: Math.PI / 20
            },
            v: {
              min: 0,
              max: Math.PI,
              step: Math.PI / 20
            },
            x: function (u, v) {
              return Math.sin(v) * Math.sin(u);
            },
            y: function (u, v) {
              return Math.sin(v) * Math.cos(u);
            },
            z: function (u, v) {
              return Math.cos(v);
            }
          }
        }]
      }
      // 绘制图表
      myChart.setOption(option)
      this.$plugin.resize(myChart)
    }
  }
}

</script>
<style lang="less" scoped>
.map_cont {
  border: 0;
  width: 48%;
  display: flex;
  align-items: center;
  position: relative;
  top: -10px;
  #mapChart {
    width: 100%;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
}

</style>
