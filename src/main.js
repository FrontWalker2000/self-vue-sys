import Vue from 'vue'
import App from './App'
import router from './router'
import element from 'element-ui'
import http from './common/api'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/common/index.less'
import echarts from './plugin/echarts' //引入echarts
import plugin from './plugin/index'

Vue.config.productionTip = false
Vue.use(element)
Vue.prototype.$api = http
Vue.prototype.$echarts = echarts
Vue.prototype.$plugin = plugin

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
