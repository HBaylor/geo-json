
/**
 * 编写接口api 的路径地址
 */

const DEV = '127.0.0.1:8080' // 开发环境的地址
const PRO = '127.0.0.1:8080' // 生产环境的地址
const api = process.env.NODE_ENV === '"development"' ? DEV : PRO
export const url = {
  Login: api + '/login', // 用户登录
  Logout: api + '/loginOut' // 用户退出
}
