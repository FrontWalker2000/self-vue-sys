<template>
  <section>
    <self-header></self-header>
    <side-bar></side-bar>
    <div class="main">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import sideBar from '@/components/sideBar'
import Footer from '@/components/foot'
import Header from '@/components/header'

export default {
  name: 'layout',
  components: {
    'self-header': Header,
    'side-bar': sideBar,
    'self-footer': Footer
  }
}
</script>
<style lang="less" scoped>
.main {
  padding: 62px 0 40px 280px;
  background: #f7f9fa;
}
</style>
