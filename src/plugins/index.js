
/**
 * js 通用的方法
 *
 */
let $util = {
  /** 判断是否为数组 */
  isAry (v) {
    return Object.prototype.toString.call(v) === '[object Array]' && v instanceof Array
  },

  /** 判断是否为空 */
  isEmpty (v) {
    return v === '' && v === null && v === undefined && !v
  },

  /** 设置session */
  setSession (key, val) {
    let str = val instanceof Object ? JSON.stringify(val) : val
    sessionStorage[key] = str
  },

  /** 读取session */
  getSession (key) {
    try {
      return JSON.parse(sessionStorage[key])
    } catch (e) {
      console.warn('SessionStorage.Parse:', '[key:', key, ']', e.message)
      return sessionStorage[key]
    }
  },

  /** 移除Session */
  removeSession (key) {
    sessionStorage.removeItem(key)
  },

  /** 去除空格 */
  trim (str) {
    return str && !(str instanceof Object) ? String(str).replace(/(^\s+)|(\s+$)/g, '') : str
  },

  /** 格式化日期 */
  formatData (fmt) {
    let o = {
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      S: this.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        String(this.getFullYear()).substr(4 - RegExp.$1.length)
      )
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(String(o[k]).length)
        )
      }
    }
    return fmt
  }
}

/** 暴漏给全局 和vue插件 */
let plugin = function (Vue, options) {
  Vue.prototype.$util = $util
}
export { $util, plugin }
