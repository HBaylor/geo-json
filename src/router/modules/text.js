/**
 *
 * 用户模块路由
 */

export const route = {
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
