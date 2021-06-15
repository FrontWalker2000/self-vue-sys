<template>
  <div class="pick" v-if="modelShow" @click.self="hideToast">
    <div class="pick_cont">
      <div class="cont_btn">
        <slot v-if="selfOrt"></slot>
        <div class="btn" >
          <span v-for="(item, index) in btnArr" :key="index" @click="handler(item)">{{ item.label }}</span>
        </div>
        <div class="close" @click="hideToast">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 显示model　
      modelShow: false,
      // 显示文本/支持dom
      modelText: '',
      // 自定义操作
      selfOrt: false,
      // 操作按钮
      btnArr: [],
      // 取消操作
      cancel: '',
      // 层级定义
      zIndex: 99,
    }
  },
  methods: {
    // 隐藏
    hideToast() {
      document.body.style.cssText += "overflow: auto"
      this.modelShow = false
    },
    handler(item) {
      item.fn && typeof item.fn === 'function' && item.fn()
      this.hideToast()
    }
  }
}
</script>

<style lang='less' scoped>

.pick {
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
  align-items: flex-end;

  .pick_cont {
    width: 100%;
    background: #FFFFFF;
    border-radius: 16px 16px 0 0;
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
      justify-content: center;
      flex-direction: column;

      .btn {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        span {
          height: 110px;
          width: 100%;
          font-size: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #252627;
          border-bottom: 1px solid #F0F1F2;
        }
      }

      .close {
        height: 110px;
        width: 100%;
        font-size: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 16px solid #F0F1F2;
        color: #252627;
      }
    }
  }
}
</style>

