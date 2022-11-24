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
    path: '/',
    name: 'home',
    redirect: '/dashboard',
    meta: {
      title: 'home Page',
      layout: false,
      menu: false,
      icon: '',
      sort: 11
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue'),
    meta: {
      title: 'Login Page',
      layout: false,
      menu: false,
      icon: '',
      sort: 22
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

let registerRouterFresh = true
router.beforeEach((to, from, next) => {
  const storeUser = useUserStore()

  if (to.meta.title) {
    document.title = to.meta.title as string
  }

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
