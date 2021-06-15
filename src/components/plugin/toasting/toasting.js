import toast from './toasting.vue'

function install(Vue) {
  const ToastConstructor = Vue.extend(toast)
  const instance = new ToastConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  Vue.prototype.$showToast = function (str, state, time) {
    instance.toastShow = false
    Vue.nextTick(() => {
      instance.toastText = str
      instance.toastShow = true
      time && (instance.time = time)
      state && (instance.iconClass = state)
    })
  }
}

export default install
