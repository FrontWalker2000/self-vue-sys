let NProgress = require('nprogress')
export default function routeHandler(router, Vue) {
  router.beforeEach(async (to, from, next) => {
    // 从本地中取得token
    const hasToken = Vue.prototype.$plugin.store.get('token')

    // 如果有token 也就是已经登陆的情况下
    if (hasToken) {
      // 并且要前往的路径是'/login'  则返回 '/'
      if (to.path === '/login') {
        next({path: '/'})
      } else {
        // todo
        next()
        // 从store中取得用户的 roles, 也就是用户的权限 并且用户的权限数组必须有一个以上
        // const hasRoles = store.getters.roles && store.getters.roles.length > 0
        // // 有权限则直接进入
        // if (hasRoles) {
        //   next()
        // } else {
        //   // 没有权限的话
        //   try {
        //     // 获取用户信息
        //     const { roles } = await store.dispatch('user/getInfo')
        //     // 生成可访问路由
        //     const accessRoutes = await store.dispatch('permission/generateRoutes', 			  														roles)
        //     // 将可访问路由添加到路由上
        //     router.addRoutes(accessRoutes)
        //     // 进入路由
        //     next({ ...to, replace: true })
        //   } catch (error) {
        //     // 如果出现异常  清空路由
        //     await store.dispatch('user/resetToken')
        //     // Message提示错误
        //     Message.error(error || 'Has Error')
        //     // 跳到login页面重新登陆
        //     next(`/login?redirect=${to.path}`)
        //   }
        // }
      }
    } else {
      // todo
      // 没有token 也就是没有登陆的情况下防止死循环
      if (to.path === '/login') {
        next()
      } else {//不然就跳转到登录;
        next(`/login?redirect=${to.path}`)
      }
      NProgress.done()
      // 判断是否是白名单(不需要登陆就可以访问的路由)
      // if (whiteList.indexOf(to.path) !== -1) {
      //   next()
      // } else {
      //   // 其他的一路给我跳到login页面 老老实实的进行登陆
      //   next(`/login?redirect=${to.path}`)
      //   NProgress.done()
      // }
    }
  })
}
