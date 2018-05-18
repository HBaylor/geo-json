// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import ElementUI from 'element-ui'
import axios from './server/index'
import { plugin } from './plugins'
import * as filter from '@/plugins/filter'
import './style/index.less'

Vue.use(plugin)
Vue.use(axios)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false

/**
 * 加载过滤器到vue全局
 */
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
