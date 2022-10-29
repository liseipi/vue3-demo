import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store'
import { addRoutes } from '@/util/asyncRoutes'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import('../views/Home/index.vue'),
  //   meta: {
  //     title: 'Home Page',
  //     layout: true
  //   }
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue'),
    meta: {
      title: 'Login Page',
      layout: false
    }
  }
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   component: () => import('../views/Dashboard/index.vue'),
  //   meta: {
  //     title: 'Dashboard Page',
  //     layout: true
  //   }
  // },
  // {
  //   path: '/register',
  //   name: 'register',
  //   component: () => import('../views/Register/index.vue'),
  //   meta: {
  //     title: 'Register Page',
  //     layout: false
  //   }
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

let registerRouterFresh = true
router.beforeEach((to, from, next) => {
  const storeUser = useUserStore()
  if (to.name !== 'login' && !storeUser.token) {
    next({ path: '/login' })
  } else {
    if (!from.name && registerRouterFresh) {
      addRoutes(storeUser, router)
      next({ ...to, replace: true })
      registerRouterFresh = false
    } else {
      next()
    }
  }
})

export default router
