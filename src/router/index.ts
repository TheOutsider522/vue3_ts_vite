// 通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'
import { constantRoute } from '@/router/routes'

const router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  routes: constantRoute,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
} as RouterOptions)
export default router