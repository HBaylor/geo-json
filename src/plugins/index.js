
/**
 * js 通用的方法
 *
 */
export const _ = {
  /**
   * 判断是否为数组
   * @param {any} params
   * @returns
   */
  isAry: function (params) {
    return Object.prototype.toString.call(params) === '[object Array]'
  }
}
