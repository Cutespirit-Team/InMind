import { nextTick, createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers'

// 匯入 font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, fab, far)

const app = createApp(App)

// 自動標題(會從 router 裡面的 title 去抓)
router.afterEach((to, from) => {
  nextTick(() => {
    if (to.name) {
      // 帽似是 to.title
      document.title = to.name
    } else {
      document.title = 'This is Shark NFT'
    }
  })
})

// 載入 font awesome
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

// 把 console.log 的開發者提示關掉
app.config.productionTip = false

app.mount('#app')
