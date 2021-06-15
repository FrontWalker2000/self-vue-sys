<template>
  <div class="toast" v-if="toastShow" :style="style">
    <div class="icon">
      <i :class="['el-icon-' + iconClass ]"></i>
      <span></span>
    </div>
    <div class="msg">{{ toastText }}</div>
  </div>
</template>

<script>
import Vue from "vue";
import {Icon} from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(Icon)
export default {
  data() {
    return {
      toastShow: false,
      // 显示文本
      toastText: '',
      // 状态
      state: '',
      // 默认icon
      iconClass: 'success',
      // 初始定时器
      timer: '',
      // 默认时间
      time: 2000,
      // 层级
      zIndex: 999
    }
  },
  computed: {
    style() {
      return {
        zIndex: this.zIndex
      }
    },
  },
  watch: {
    toastShow(now) {
      if (now) this.startTimeout();
    }
  },
  methods: {
    startTimeout() {
      this.stopTimeout();
      this.timer = setTimeout(this.hideToast, this.time);
    },
    stopTimeout() {
      clearInterval(this.timer);
    },
    hideToast() {
      this.toastShow = false;
    }
  }
}
</script>

<style lang='less' scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 45%;
  transition: all .5s;
  transform: translateX(-50%) translateY(-50%);
  color: #FFF;
  text-align: center;
  background: rgba(17, 17, 17, 0.6);
  min-width: 310px;
  padding: 40px 30px;
  border-radius: 25px;
  min-height: 230px;
  text-align: center;
  .icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      width: 50px;
      height: 50px;
      background: #FFFFFF;
      position: absolute;
      z-index: 1;
      border-radius: 100%;
    }
  }
  i {
    font-size: 70px;
    position: relative;
    z-index: 2;
  }
  .el-icon-error {
    color: #f5463f;
  }
  .el-icon-success {
    color: #1BC304;
  }
  .msg {
    font-size: 28px;
    padding-top: 26px;
  }
}
</style>

