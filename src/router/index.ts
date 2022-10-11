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

export default router
