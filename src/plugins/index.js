
/**
 * js 通用的方法
 *
 */

let _ = {}
_.isAry = function (params) {
  return Object.prototype.toString.call(params) === '[object Array]' && params instanceof Array
}

typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = _ : window._ = _
