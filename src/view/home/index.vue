<template>
  <div class="home_cont">
    <div class="cont_des box_shadow">
      <span class="s1"><i>欢迎</i>回来, Yangjialin!</span>
      <span class="s2">昨天我很聪明，所以我想改变世界。今天我很聪明，所以我在改变自己。</span>
    </div>
    <div class="cont_info">
      <div class="info_item box_shadow">
        <div class="item_text">
          <span class="s1">同期数据</span>
          <span class="s2">系统统计日常信息</span>
        </div>
        <div class="item_list">
          <div class="list">
            <el-progress type="circle" class="circle" :width="120"  :stroke-width="10" show-text :percentage="25">55%</el-progress>
            <span>New Users</span>
          </div>
          <div class="list">
            <el-progress type="circle" class="circle" :width="120"  :stroke-width="10" show-text color="#80c160" :percentage="45"></el-progress>
            <span>New Sale</span>
          </div>
          <div class="list">
            <el-progress type="circle" class="circle" :width="120"  :stroke-width="10" show-text color="#ffb23e" :percentage="75"></el-progress>
            <span>New Produce</span>
          </div>

        </div>
      </div>
      <div class="info_line">
        <barEcharts id="options2" width="100%" :options="options2"></barEcharts>
      </div>
    </div>
    <div class="cont_line">
      <linesEcharts :id="'line1'" :bg="['#91cc75', '#59a933']" :data="[200, 50, 10, 400, 120]"></linesEcharts>
      <linesEcharts :id="'line2'" :bg="['#82c6ff', '#1269db']" :data="[20, 500, 150, 50, 220]"></linesEcharts>
      <linesEcharts :id="'line3'" :bg="['#833e9e', '#be66e0']" :data="[120, 50, 50, 400, 20]"></linesEcharts>
    </div>
    <lineEcharts></lineEcharts>
    <div class="cont_two">
      <barEcharts id="options" :options="options"></barEcharts>
      <radarEcharts></radarEcharts>
    </div>
    <div class="cont_data">
      <tableMap></tableMap>
      <map-echarts></map-echarts>
    </div>
  </div>
</template>

<script>
import lineEcharts from '../../components/echarts/line'
import barEcharts from '../../components/echarts/bar'
import radarEcharts from '../../components/echarts/radar'
import mapEcharts from '../../components/echarts/map'
import linesEcharts from '../../components/echarts/lines'
import tableMap from '../../components/table/tableMap'
export default {
  name: 'home',
  components: {lineEcharts, barEcharts, radarEcharts, mapEcharts, tableMap, linesEcharts},
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
      options2: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      }
    }
  },
  mounted() {
    this.userInfo()
  },
  methods: {
    async userInfo() {
      let res = await this.$api.user.getUserInfo()
      if (res && res.status === 0) {
        this.$plugin.store.set('token', res.data)
        this.$router.replace('/home')
      }
    },
  }
}
</script>

<style scoped lang="less">
  .home_cont {
    color: #E8ECF3;
    padding-right: 20px;
    .cont_info{
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .info_item {
        background: #ffffff;
        padding: 20px;
        width: 60%;
        .item_text {
          display: flex;
          flex-direction: column;
          padding-bottom: 35px;
          .s1 {
            color: #333333;
            font-size: 18px;
            padding-bottom: 6px;
          }
          .s2 {
            color: #666666;
          }
        }
        .item_list {
          display: flex;
          justify-content: center;
          .list {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #666666;
            padding: 0 20px;
            span {
              padding-top: 10px;
              font-weight: bold;
            }
          }
        }
      }
      .info_line {
        background: #ffffff;
        width: 38%;
      }
      ::v-deep .el-progress__text {
        font-size: 30px;
        font-weight: bold;
      }
    }
    .cont_des {
      padding: 20px 10px;
      color: #333333;
      display: flex;
      flex-direction: column;
      background: #ffffff;
      margin-top: 30px;
      .s1 {
        font-size: 20px;
        padding-bottom: 10px;
        font-weight: bold;
        i{
          font-size: 24px;
          font-style: normal;
        }
      }
      .s2 {
        font-size: 14px;
      }
    }
    .cont_two {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .cont_line {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .cont_data {
      background: #ffffff;
      display: flex;
      position: relative;
      justify-content: space-between;
      margin-top: 20px;
      box-shadow: 2px 6px 15px 0 rgb(69 65 78 / 10%);
      padding: 10px;
    }
  }
</style>
