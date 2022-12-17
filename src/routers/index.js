import { createRouter, createWebHistory } from 'vue-router'

// 定義路由表
const routes = [
  {
    path: '/',
    name: 'Inmind',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/login',
    name: '登入 InMind',
    component: () => import('@/views/LoginPage.vue'),
    children: [
      {
        path: ':type',
        name: '登入 InMind'
      }
    ]
  }
]

// 執行路由表
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 }
  },
  routes
})

// 將 name 自動賦予至 head 中的 title
router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
