<template>
  <div class="popup_app" v-if="modelShow" @click.self="hideToast">
    <div class="app_cont">
      <div class="cont_title" v-html="modelText"></div>
      <div class="cont_btn">
        <span class="s1" @click="hideToast">{{btnArr[0]}}</span>
        <span class="s2" @click="handler">{{btnArr[1]}}</span>
      </div>
      <img class="close_light" @click="hideToast" src="../../../assets/images/common/close_light.png">
    </div>
  </div>
</template>

<script>
import {openAPP} from "../../../utils/helper";
export default {
  data() {
    return {
      // 显示model　
      modelShow: false,
      // 显示文本/支持dom
      modelText: '',
      // 下载app-跳转url, 不传则下载app不做跳转（Android）
      url: null,
      // 定义回调自定义处理(cb存在则自定义处理，否则走下载app)
      cb: null,
      // 按钮文本 -默认: ['取消','确认']
      btnArr: [],
      // 层级定义
      zIndex: 99,
    }
  },
  mounted() {
  // todo yjl
  },
  methods: {
    openAPP,
    hideToast() {
      document.body.style.cssText += "overflow: auto"
      this.modelShow = false
    },
    // 确认处理
    handler() {
      this.cb ? this.cb() : this.openAPP()
      this.hideToast()
    }
  }
}
</script>

<style lang='less' scoped>

.popup_app {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  z-index: 999;
  align-items: center;

  .app_cont {
    width: 84%;
    padding: 50px 40px;
    background: #FFFFFF;
    border-radius: 16px;
    position: relative;

    .cont_title {
      color: #252627;
      font-size: 34px;
      text-align: center;
      line-height: 1.7;
      padding: 0 40px;
      font-weight: bold;
    }

    .cont_btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 60px;

      span {
        width: 45%;
        height: 78px;
        font-size: 30px;
        border-radius: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .s1 {
        background: #F0F1F2;
        color: #252627;
      }

      .s2 {
        background: #9F5ABA;
        color: #FFFFFF;
      }
    }

    .close_light {
      position: absolute;
      bottom: -80px;
      width: 56px;
      height: 56px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>

