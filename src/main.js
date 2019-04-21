// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/**
 * 导入get、post 方法
 */
import {getHttp, postHttp} from '../config/api'

Vue.prototype.$getHttp = getHttp
Vue.prototype.$postHttp = postHttp

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// /**
//  * get网络请求
//  */
// this.$getHttp(this.$shopUrl + 'api/product/list',)
//   .then((response) => {
//     response.result//请求返回数据
//   })
//
// // post网络请求
//
// this.$postHttp(this.$shopUrl + 'api/product/list',)
//   .then((response) => {
//     response.result//请求返回数据
//   })
