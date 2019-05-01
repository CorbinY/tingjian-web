// import Axios from 'axios'
// import LocalStorage from "./LocalStorage";
// import constant from "./constant"
// import SessionStorage from "./SessionStorage";
//
// // import {Indicator, MessageBox, Toast} from 'mint-ui'
// //
// // Axios.defaults.timeout = 50000;//默认请求超时时间
// // Axios.defaults.headers = '请求头';
// //
// //
// // /**
// //  * get 方法
// //  * @param url
// //  * @param params
// //  * @returns {Promise<any>}
// //  */
// //
// // export function getHttp (url, params = {}) {
// //   // 创建动画mint-ui
// //   Indicator.open({
// //     text: '加载中...',
// //     spinnerType: 'fading-circle'
// //   });
// //   return new Promise((resolve, reject) => {
// //     Axios.get(url, {
// //       params: params
// //     })
// //       .then(response => {
// //         resolve(response.data);
// //         Indicator.close() // // 关闭动画
// //       })
// //       .catch(err => {
// //         reject(err);
// //         Indicator.close(); // // 关闭动画
// //         MessageBox.alert('message', err)
// //       })
// //   })
// // }
// //
// //
// // /**
// //  * post 方法
// //  * @param url
// //  * @param data
// //  * @returns {Promise<any>}
// //  */
// // export function postHttp (url, data = {}) {
// //   Indicator.open({
// //     text: '加载中...',
// //     spinnerType: 'fading-circle'
// //   });
// //   return new Promise((resolve, reject) => {
// //     Axios.post(url, data)
// //       .then(response => {
// //         if (response.data.status == 1) {
// //           resolve(response.data)
// //         } else {
// //           Toast(response.data.msg)
// //         }
// //         Indicator.close() // // 关闭动画
// //       }, (err) => {
// //         reject(err);
// //         Indicator.close()
// //       })
// //   })
// // }
//
// // export function getSongListFromServer(navIndex){
// //
// // }
//
//
// var Common = {
//   async getSongListFromServer(navIndex) {
//    // alert("获取导航索引" + navIndex);
//     //获取歌曲列表信息
//     var api0 = '/api/music';
//     var api = '';
//     if (navIndex == 0) {
//       api = api0 + '/hot/recommend-list';
//     } else if (navIndex == 1) {
//       api = api0 + '/last/song-list';
//     } else if (navIndex == 2) {
//       api = api0 + '/hot/song-list';
//     } else if (navIndex == 3) {
//       api = api0 + '';
//     } else if (navIndex == 4) {
//       api = api0 + '/my/recommend';
//     } else if (navIndex == 5) {
//       //
//       api = api0 + '/my/collect';
//     } else if (navIndex == 6) {
//       api = api0 + '';
//
//       //从缓存中读取用户信息,如果存在，但是服务端验证失败，刷新缓存
//       if (localStorage.get("userId") == null) {
//         alert("登录失效，请重新登录");
//         //跳转登录页面
//       }
//       //显示用户信息
//     }
//
//     await Axios.post(api, constant.page).then(response => {
//       if (response.data.code == 0) {
//         //暂存到本地
//         LocalStorage.set("songDataList", response.data.result);
//        // SessionStorage.set("songDataList", response.data.result);
//
//       }
//     });
//   }
// };
// export default Common;



