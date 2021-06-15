/**
 * 弹窗支持定制插件化
 * @params(可拓展)
 * 1. 取消
 * 2. 确认
 * 3. 关闭
 * 4. 标记
 **/
import popup from './popup.vue'
function install(Vue) {
  const DownAppConstructor = Vue.extend(popup)
  const instance = new DownAppConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  Vue.prototype.$selfPopup = function (str, url, btnArr, cb) {
    instance.modelShow = false
    Vue.nextTick(() => {
      document.body.style.cssText += "overflow: hidden"
      instance.modelText = str
      instance.url = url
      instance.btnArr = btnArr || ['取消', '确定']
      instance.cb = cb
      instance.modelShow = true
    })
  }
  // 插件销毁
  Vue.prototype.$selfPopup.close = function (){
    instance.modelShow = false
    document.body.style.cssText += "overflow: auto"
  }
}

export default install
