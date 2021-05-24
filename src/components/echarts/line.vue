<template>
  <div class="line_cont box_shadow">
    <div id="lineChart" ref="myChart"></div>
  </div>
</template>
<script>

export default {
  name: 'eCharts',
  data() {
    return {
      msg: '折线图',
      category: [],
      dottedBase: +new Date(),
      lineData: [],
      barData: []
    }
  },
  mounted() {
    this.initDate()
    this.drawLine();
  },
  methods: {
    initDate() {
      for (let i = 0; i < 20; i++) {
        let date = new Date(this.dottedBase += 3600 * 24 * 1000);
        this.category.push([
          date.getFullYear(),
          date.getMonth() + 1,
          date.getDate()
        ].join('-'));
        let b = Math.random() * 200;
        let d = Math.random() * 200;
        this.barData.push(b)
        this.lineData.push(d + b);
      }
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('lineChart'))
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
              color: '#0f375f' // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: '#145596' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#0f375f' // 100% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          },
          iconStyle: {
            borderColor: '#3b82cc'
          }
        },
        legend: {
          data: ['line', 'bar'],
          textStyle: {
            color: '#ccc'
          }
        },
        xAxis: {
          data: this.category,
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        yAxis: {
          splitLine: {show: false},
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        series: [{
          name: 'line',
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 15,
          data: this.lineData
        }, {
          name: 'bar',
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            barBorderRadius: 5,
          },
          data: this.barData
        }, {
          name: 'line',
          type: 'bar',
          barGap: '-100%',
          barWidth: 10,
          z: -12,
          data: this.lineData
        }, {
          name: 'dotted',
          type: 'pictorialBar',
          symbol: 'rect',
          itemStyle: {
            color: '#0f375f'
          },
          symbolRepeat: true,
          symbolSize: [12, 4],
          symbolMargin: 1,
          z: -10,
          data: this.lineData
        }]
      };
      // 绘制图表
      myChart.setOption(option)
      this.$plugin.resize(myChart)
    }
  }
}

</script>
<style lang="less" scoped>
.line_cont {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  border: 0;
  margin-bottom: 20px;

  #lineChart {
    width: 100%;
    height: 300px;
    margin: 0 auto;
  }
}

</style>
