// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import md5 from 'js-md5'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Router)
Vue.prototype.$md5 = md5;
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('user');
  }
  var user = sessionStorage.getItem('user');
  if (!user && to.path !== '/login') {
    next({
      path: '/login'
    })
  } else {
    next();
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
