<template>
  <div class="bar_cont box_shadow">
    <div id="myChart" ref="myChart"></div>
  </div>

</template>
<script>
export default {
  name: 'eCharts',
  data() {
    return {
      msg: '柱状图',
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
      this.$plugin.resize(myChart)
    }
  }
}

</script>
<style lang="less" scoped>
.bar_cont {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  border: 0;
  width: 48%;
  #myChart {
    width: 95%;
    height: 260px;
    margin: 20px auto;
    background: #ffffff;
  }
}

</style>
