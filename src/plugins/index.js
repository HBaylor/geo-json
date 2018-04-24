
/**
 * js 通用的方法
 *
 */

let $util = {
  isAry (params) {
    return Object.prototype.toString.call(params) === '[object Array]' && params instanceof Array
  }
}

/** 暴漏给全局 和vue插件 */
let plugin = function (Vue, options) {
  Vue.prototype.$util = $util
}
export { $util, plugin }
