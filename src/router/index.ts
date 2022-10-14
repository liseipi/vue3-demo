import { createRouter, createWebHistory } from 'vue-router'

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
  if (to.name !== 'login' && !localStorage.getItem('token')) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
