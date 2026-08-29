import { createApp } from 'vue'
import './style.css'      // 刚才清空为空白的那个文件
import './assets/main.css' // 包含 @tailwind 的那个文件
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')