// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Constant from '../config/constant'
/*import iView from 'iview';*/

/*import 'iview/dist/styles/iview.css';*/
Vue.prototype.constant = Constant;
/*Vue.use(iView);*/
/**
 * 用户获取的歌曲列表   localStorage.set("songDataList",songDataList)
 * 用户的信息,不包含密码         localStorage.set("userInfo",userInfo)
 * 每次请求接口，都要包含userid参数，
 * 当用户未登录时，默认传递缓存中的userId，
 * 为登录时，缓存中的userId默认为0
 */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
