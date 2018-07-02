/**
 *
 * 用户模块路由
 * component 的值是组件相对于pages的路径
 *
 */

export default {
  path: '/',
  component: 'index.vue',
  meta: {
    title: '测试信息'
  },
  children: [
    {
      path: '/list',
      component: 'list.vue',
      meta: {
        title: '列表',
        menu: true
      }
    },
    {
      path: '/table',
      component: 'testTable.vue',
      meta: {
        title: 'table',
        menu: true
      }
    }
  ]
}
