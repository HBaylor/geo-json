import Vue from 'vue'
import Router from 'vue-router'
import {_} from '../plugins/index'

Vue.use(Router)
const _import = component => import(`@/pages/${component}`)

/**
 * 动态扫描路由模块 生成路由
 */
const modules = (file => {
  return file.keys().map(key => file(key))
})(require.context('./', true, /^\.\/modules\/((?!\/)[\s\S])+\.js$/))

let requireComponent = item => {
  item.component = _import(item.component)
  if (_.isAry(item.children) && item.children > 0) {
    requireComponent(item.children)
  }
}

let routData = []
modules.forEach(item => {
  requireComponent(item.route)
  routData.push(item.route)
})

export default new Router({
  routes: routData
})
