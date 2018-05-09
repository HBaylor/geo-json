/**
 *
 * 用户模块路由
 * component 的值是组件相对于pages的路径
 *
 */

export default {
  path: '/list',
  component: 'index.vue',
  meta: {
    title: '测试信息'
  },
  children: [
    {
      path: '/list/o1',
      component: 'list.vue',
      meta: {
        title: '商户列表',
        menu: true
      }
    },
    {
      path: '/list/o2',
      component: 'list2.vue',
      meta: {
        title: '商户列表',
        menu: true
      }
    }
  ]
}
