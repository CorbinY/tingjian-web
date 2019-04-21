import axios from 'axios'
import {MessageBox, Toast} from 'mint-ui'

axios.defaults.timeout = 50000//默认请求超时时间
axios.defaults.headers = '请求头'


/**
 * get 方法
 * @param url
 * @param params
 * @returns {Promise<any>}
 */

export function getHttp (url, params = {}) {
  // 创建动画mint-ui
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
        Indicator.close() // // 关闭动画
      })
      .catch(err => {
        reject(err)
        Indicator.close() // // 关闭动画
        MessageBox.alert('message', err)
      })
  })
}


/**
 * post 方法
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
export function postHttp (url, data = {}) {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        if (response.data.status == 1) {
          resolve(response.data)
        } else {
          Toast(response.data.msg)
        }
        Indicator.close() // // 关闭动画
      }, (err) => {
        reject(err)
        Indicator.close()
      })
  })
}
