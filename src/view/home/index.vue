<template>
  <div class="home_cont">
    <div class="cont_des">
      <span class="s1">Welcome back, Yangjialin!</span>
      <span class="s2">Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.</span>
    </div>
    <div class="cont_line">
      <linesEcharts :id="'line1'" :bg="['#91cc75', '#59a933']" :data="[200, 50, 10, 400, 120]"></linesEcharts>
      <linesEcharts :id="'line2'" :bg="['#82c6ff', '#1269db']" :data="[20, 500, 150, 50, 220]"></linesEcharts>
      <linesEcharts :id="'line3'" :bg="['#833e9e', '#be66e0']" :data="[120, 50, 50, 400, 20]"></linesEcharts>
    </div>
    <lineEcharts></lineEcharts>
    <div class="cont_two">
      <barEcharts></barEcharts>
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
  mounted() {
    this.userInfo()
  },
  methods: {
    async userInfo() {
      let res = await this.$api.user.getUserInfo()
      if (res.status === 0) {
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
    .cont_des {
      padding-top: 30px;
      color: #121727;
      display: flex;
      flex-direction: column;
      .s1 {
        font-size: 20px;
        padding-bottom: 15px;
        font-weight: bold;
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
      border-radius: 10px;
      box-shadow: 2px 6px 15px 0 rgb(69 65 78 / 10%);
      padding: 20px;
    }
  }
</style>
