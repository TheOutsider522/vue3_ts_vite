// 对外暴露配置路由(常量路由)
export const constantRoute = [
  {
    // 登陆路由
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    // 命名路由
    name: 'login',
  },
  {
    // 登录成功后展示数据的路由
    path: '/',
    component: () => import('@/views/home/index.vue'),
    // 命名路由
    name: 'layout',
  },
  {
    // 404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    // 命名路由
    name: '404',
  },
  {
    // 404
    path: '/:pathMatch',
    redirect: '/404',
    name: 'Any',
  },
]