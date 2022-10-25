interface routerInfo {
  path: string
  name: string
  component?: string
  redirect?: string
  meta: {
    title: string
    layout: boolean
  }
  children?: routerInfo[]
}

const rootRoutes: routerInfo[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: 'views/Dashboard/index.vue',
    meta: {
      title: '仪表板',
      layout: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: 'views/Register/index.vue',
    meta: {
      title: '注册管理员',
      layout: true
    }
  }
]

const adminRoutes: routerInfo[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: 'views/Dashboard/index.vue',
    meta: {
      title: '仪表板',
      layout: true
    }
  }
]

const userRoutes: routerInfo[] = []

export { rootRoutes, adminRoutes, userRoutes, routerInfo }
