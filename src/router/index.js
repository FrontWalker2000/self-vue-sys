import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/layout'
import Home from '@/view/home'
import Icon from '@/view/icon/icon'
import Article from '@/view/article'
import Table from '@/view/table'
import MarkDown from '@/view/markDown'
import routes from "./routes";
import routeHandler from './route-check'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/icon',
          name: 'icon',
          component: Icon
        },
        {
          path: '/markDown',
          name: 'markDown',
          component: MarkDown
        },
        {
          path: '/article',
          name: 'article',
          component: Article
        },
        {
          path: '/table',
          name: 'table',
          component: Table
        },
      ]
    },
    ...routes
  ]
})
routeHandler(router, Vue)
export default router