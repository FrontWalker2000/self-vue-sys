<template>
  <div class="bar_cont" :style="{width: width}">
    <div :id="id" class="myChart" ref="myChart"></div>
  </div>

</template>
<script>
export default {
  name: 'eCharts',
  props: {
    options: {
      type: Object
    },
    id: {
      type: String
    },
    width: {
      type: String,
      default: '49%'
    }

  },
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
      let myChart = this.$echarts.init(document.getElementById(this.id))
      // 绘制图表
      myChart.setOption(this.options)
      this.$plugin.resize(myChart)
    }
  }
}

</script>
<style lang="less" scoped>
.bar_cont {
  background: #ffffff;
  border: 0;
  .myChart {
    width: 100%;
    height: 260px;
    margin: 20px auto;
    background: #ffffff;
  }
}

</style>
