<template>
  <div class="radar_cont box_shadow">
    <div id="radarChart" ref="myChart"></div>
  </div>

</template>
<script>
export default {
  name: 'eCharts',
  data() {
    return {
      msg: '雷达图',
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('radarChart'))
      // 绘制图表
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          left: 'center',
          data: ['某软件', '某主食手机', '某水果手机', '降水量', '蒸发量']
        },
        radar: [
          {
            indicator: [
              {text: '品牌', max: 100},
              {text: '内容', max: 100},
              {text: '可用性', max: 100},
              {text: '功能', max: 100}
            ],
            center: ['50%', '50%'],
            radius: 80
          },
        ],
        series: [
          {
            type: 'radar',
            tooltip: {
              trigger: 'item'
            },
            areaStyle: {},
            data: [
              {
                value: [60, 73, 85, 40],
                name: '某软件'
              }
            ]
          },
        ]
      };
      myChart.setOption(option)
      this.$plugin.resize(myChart)
    }
  }
}

</script>
<style lang="less" scoped>
.radar_cont {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  border: 0;
  width: 48%;
  #radarChart {
    width: 95%;
    height: 260px;
    margin: 20px auto;
    background: #ffffff;
  }
}

</style>
