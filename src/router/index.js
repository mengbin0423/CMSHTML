import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import login from '@/components/login'
import home from '../views/index'
import KeyPage from '@/views/keypage'
import mange from '@/views/mange'
import error from '@/components/error'
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'register',
      component: register,
      hidden: true
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      hidden: true
    },
    {
      path: '/',
      name: 'home',
      component: home,
      hidden: true,
      children: [
        {path: 'keyPage', name: '首页', component: KeyPage},
        {path: 'mange', name: '信息管理', component: mange},
        {path: 'base', name: '基础权限', component: () => import('@/views/authority')},
        {path: 'admin', name: '管理员权限', component: () => import('@/views/authority/admin')},
        {path: 'switch', name: '角色呼唤', component: () => import('@/views/authority/change')},
        {path: 'modify', name: '修改信息', component: () => import('@/views/mange/modify')},
        {path: 'sendMessage', name: '信息发布', component: () => import('@/views/sendmessage')},
        {path: 'stats', name: '数据统计', component: () => import('@/views/stats')}
      ]
    },
    {
      path: '*',
      component: error
    }
  ]
})
