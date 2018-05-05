
/**
 * 通用的方法
 */

let $util = {
  /** 判断是否为数组 */
  isAry (v) {
    return Object.prototype.toString.call(v) === '[object Array]' && v instanceof Array
  },
  isTrue (v) {
    return v === 'undefind' || v === null || v === ''
  },
  /** 格式化日期 */
  formateData (v) {

  }

}

/** 暴漏给全局 和vue插件 */
let plugin = function (Vue, options) {
  Vue.prototype.$util = $util
}
export { $util, plugin }
