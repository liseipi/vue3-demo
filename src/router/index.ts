import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/index.vue'),
    meta: {
      title: 'Home Page',
      layout: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue'),
    meta: {
      title: 'Login Page',
      layout: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  const storeUser = useUserStore()
  if (to.name !== 'login' && !storeUser.token) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
