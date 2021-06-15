<template>
  <section class="plugin_cont">
    <div class="cont_title">插件演示示例</div>
    <div class="cont_methods">
      <span class="">用法</span>
      <span class="s2">this.$xxxx()</span>
    </div>
    <div class="cont_item">
      <div class="item" @click="toastBtn">
        <span class="s1">toast</span>
        <span class="s2" >查看</span>
      </div>
      <div class="item" @click="pickBtn">
        <span class="s1" >pick</span>
        <span class="s2" >查看</span>
      </div>
      <div class="item" @click="popupBtn">
        <span class="s1">popup</span>
        <span class="s2" >查看</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "index",
  data() {
    return {}
  },
  methods: {
    toastBtn() {
      this.$showToast('成功')
    },
    pickBtn() {
      this.$selfPick()
    },
    popupBtn() {
      this.$selfPopup('自定义标题', null)
    }
  }
}
</script>

<style scoped lang="less">
.plugin_cont {
  padding: 30px 0;

  .cont_title {
    font-size: 28px;
    font-weight: bold;
  }

  .cont_methods {
    background: #E8ECF3;
    font-size: 16px;
    padding: 10px;
    color: #666666;

    .s2 {
      color: #1269db;
    }
  }
  .cont_item {
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
    .item {
      background: #FFFFFF;
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      padding: 20px;
      cursor: pointer;
      border-radius: 8px;
      .s2 {
        padding-top: 20px;
      }
    }
  }
}

</style>
