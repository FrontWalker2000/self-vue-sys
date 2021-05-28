<template>
  <div class='home'>
    <el-switch v-model="cutcheack" active-color="#333" inactive-color="#13ce66" active-text="主题"
               @change="switchs"></el-switch>
  </div>
</template>

<script>
import cut from "../../utils";
export default {
  name: "index",
  data() {
    return {
      cutcheack: false, //主题切换
    };
  },
  methods: {
    // 左侧导航隐藏或显示
    // 切换主题
    switchs() {
      cut(this.cutcheack);
    },
  },
}
</script>

<style scoped lang="less">
.home {
  position: relative;
  padding: 20px;
  background: @bgColor;
  margin-top: 30px;
  margin-right: 20px;
  border-radius: 6px;
  .el-container {
    height: 100%;
    color: @fontColor;
  }
}
</style>
