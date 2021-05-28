<template>
  <div class="home_cont">
    <lineEcharts></lineEcharts>
    <div class="cont_two">
      <barEcharts id="options" :options="options"></barEcharts>
      <radarEcharts></radarEcharts>
    </div>
  </div>
</template>

<script>
import lineEcharts from '../../components/echarts/line'
import barEcharts from '../../components/echarts/bar'
import radarEcharts from '../../components/echarts/radar'
export default {
  name: 'index',
  components: {lineEcharts, barEcharts, radarEcharts },
  data() {
    return {
      options: {

        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var tar;
            if (params[1].value !== '-') {
              tar = params[1];
            }
            else {
              tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
          }
        },
        legend: {
          data: ['支出', '收入']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: function () {
            var list = [];
            for (var i = 1; i <= 11; i++) {
              list.push('11月' + i + '日');
            }
            return list;
          }()
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            },
            emphasis: {
              itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
          },
          {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'top'
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
          },
          {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'bottom'
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
          }
        ]
      },
    }
  },
  mounted() {
    let res = this.a(1,1,1)
    console.log(res, 'res')
  },
  methods: {
    side(arr) {
      arr[0] = arr[2]
    },
    a(a,b,c=3) {
      c=10
      this.side(arguments)
      return a+b+c
    }
  }
}
</script>

<style scoped lang="less">
.home_cont {
  color: #E8ECF3;
  padding-right: 20px;
  .cont_two {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
