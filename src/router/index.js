import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const _import = conponent => () => import(`@/pages/${conponent}`)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: _import('index.vue')
    }
  ]
})
