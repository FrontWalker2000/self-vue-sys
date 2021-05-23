/* 公共插件函数
* */

const plugin = {
  // 全局对象
  glob: (typeof window !== 'undefined' ? window : global),
  // 随着窗口自适应
  resize(el) {
    let listener = function () {
      el.resize()
    }
    this.glob.addEventListener('resize', listener)
  },
  // 本地缓存
  store: {
    // 存值
    set(key, val) {
      plugin.glob.localStorage.setItem(key, val)
    },
    // 获取值
    get(key) {
      return plugin.glob.localStorage.getItem(key)
    },
    // 清除所有值
    clear() {
      plugin.glob.localStorage.clear()
    },
    // 清除指定
    remove(key) {
      plugin.glob.localStorage.removeItem(key)
    }
  }
}

export default plugin
