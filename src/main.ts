import { createApp } from 'vue'
import App from '@/App.vue'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// svg插件需要的配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象: 注册整个项目的全局组件
import GlobalComponent from '@/components/index'

const app = createApp(App)

// 注册ElementU-plus插件
app.use(ElementPlus, {
  // 国际化配置
  locale: zhCn,
})

// 安装自定义插件: 注册所有全局组件
app.use(GlobalComponent)

// 引入模板全局样式
import '@/styles/index.scss'

app.mount('#app')