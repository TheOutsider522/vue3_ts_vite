// 对外暴露一个插件

// 引入项目中全部的全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'
import Pagination from '@/components/Pagination/index.vue'

// 全局对象
const AllGlobalComponent = { SvgIcon, Pagination }

export default {
  // 方法名必须是`install`
  install(app) {
    // 遍历注册所有全局组件
    Object.keys(AllGlobalComponent).forEach((key) => {
      app.component(key, AllGlobalComponent[key])
    })
  },
}
