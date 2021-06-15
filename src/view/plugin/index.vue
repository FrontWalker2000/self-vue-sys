<template>
  <section class="plugin_cont">
    <span class="cont_title">插件演示示例</span>
    <div class="cont_methods">
      <span class="">用法</span>
      <span>this.$xxxx()</span>
    </div>
    <div class="cont_item">
      <span class="item" >
        toast <button @click="btn">查看</button>
      </span>
      <el-row class="item">model<el-button type="success">查看</el-button></el-row>
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
    btn() {
      this.$showToast('成功')
    }
  }
}
</script>

<style scoped lang="less">

</style>
