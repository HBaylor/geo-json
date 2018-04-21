import Vue from 'vue'
import Router from 'vue-router'
import {_} from '../plugins/index'
Vue.use(Router)

const _import = conponent => import(`@/pages/${conponent}`)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: _import('index.vue')
    }
  ]
})

/**
 * 动态扫描路由模块 生成路由
 */
const modules = (file => {
  return file.keys().map(key => file(key))
})(require.context('./', true, /^\.\/modules\/((?!\/)[\s\S])+\.js$/))

let requireComponent = item => {
  item.route.component = _import(item.route.component)
  if (_.isAry(item.route.children) && item.route.children > 0) {
    requireComponent(item.route.children)
  }
}
/**
 * 需要返回结果  *************
 */
let routes = modules.forEach(item => {
  requireComponent(item.route)
})
