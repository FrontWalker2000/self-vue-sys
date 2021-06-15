/**
 * 弹窗支持定制插件化
 * @params(可拓展)
 **/
import pick from './pick.vue'
function install(Vue) {
  const DownAppConstructor = Vue.extend(pick)
  const instance = new DownAppConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  Vue.prototype.$selfPick = function (btnArr, cancel, selfOrt) {
    instance.modelShow = false
    Vue.nextTick(() => {
      document.body.style.cssText += "overflow: hidden"
      instance.modelShow = true
      instance.btnArr = btnArr || [{label: '取消关注', fn: ()=> {}},{label: '收藏', fn: ()=>{}},{label: '举报投诉', fn: ()=>{}} ]
      instance.cancel = cancel
      instance.selfOrt = selfOrt
    })
  }
  // 插件销毁
  Vue.prototype.$selfPick.close = function (){
    instance.modelShow = false
    document.body.style.cssText += "overflow: auto"
  }
}

export default install
