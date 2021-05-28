import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/layout'
import Home from '@/view/home'
import Icon from '@/view/icon/icon'
import Article from '@/view/article'
import Table from '@/view/table'
import Upload from '@/view/upload'
import Echarts from '@/view/echarts'
import MarkDown from '@/view/markDown'
import Theme from '@/view/theme'
import Edit from '@/view/edit'
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
        {
          path: '/echarts',
          name: 'echarts',
          component: Echarts
        },
        {
          path: '/upload',
          name: 'upload',
          component: Upload
        },
        {
          path: '/theme',
          name: 'theme',
          component: Theme
        },
        {
          path: '/edit',
          name: 'edit',
          component: Edit
        },
      ]
    },
    ...routes
  ]
})
routeHandler(router, Vue)
export default router
