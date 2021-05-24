<template>
  <div class="lines_cont">
    <div :id="id" class="box_shadow" ref="myChart"></div>
  </div>

</template>
<script>
export default {
  name: 'eCharts',
  props: ['id', 'bg', 'data'],
  data() {
    return {
      msg: '折线图',
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
      let option = {
        backgroundColor: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: this.bg[0] // 0% 处的颜色
            },
            {
              offset: 1,
              color: this.bg[1] // 100% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        },
        toolbox: {
          show: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'category',
          show: true,
          data: ['M', 'T', 'W', 'Th', 'F']
        },
        legend: {
          lineStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '0%',
          top: '20%',
          containLabel:false,
        },
        yAxis: {
          type: 'value',
          show: false,
        },
        series: [{
          data: this.data,
          type: 'line',
          smooth: true,
          itemStyle:{
            normal:{
              color:'rgba(255,255,255,0.6)', //折点颜色
              lineStyle:{
                color:'rgba(255,255,255,0.8)' //折线颜色
              },
            },

          },
          areaStyle: {
            color: ['rgba(255,255,255,0.3)']
          }
        }]
      };
      myChart.setOption(option)
      this.$plugin.resize(myChart)
    }
  }
}

</script>
<style lang="less">
  canvas {
    border-radius: 6px;
  }
</style>
<style lang="less" scoped>
.lines_cont {
  border-radius: 10px;
  border: 0;
  width: 32%;
  #line1,#line2,#line3 {
    box-sizing: border-box;
    width: 100%;
    height: 120px;
    margin: 20px auto;
    padding: 10px;
    border-radius: 6px;
    background: #ffffff;
  }
}

</style>
