interface routerInfo {
  path: string
  name: string
  component?: string
  redirect?: string
  meta: {
    title: string
    layout: boolean
    menu: boolean
    icon: string
    sort: number
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
      layout: true,
      menu: true,
      icon: '',
      sort: 1
    }
  },
  {
    path: '/register',
    name: 'register',
    component: 'views/Register/index.vue',
    meta: {
      title: '注册管理员',
      layout: true,
      menu: true,
      icon: '',
      sort: 2
    }
  },
  {
    path: '/option1',
    name: 'option1',
    component: 'views/Option1/index.vue',
    meta: {
      title: '菜单1',
      layout: true,
      menu: true,
      icon: '',
      sort: 3
    }
  },
  {
    path: '/subnav1',
    name: 'subnav1',
    component: 'views/Subnav1/index.vue',
    meta: {
      title: '层级菜单1',
      layout: true,
      menu: true,
      icon: '',
      sort: 4
    },
    children: [
      {
        path: 'sub-option1',
        name: 'sub-option1',
        component: 'views/Subnav1/Sub-option1/index.vue',
        meta: {
          title: '层子级菜单1',
          layout: true,
          menu: true,
          icon: '',
          sort: 5
        }
      },
      {
        path: 'sub-option2',
        name: 'sub-option2',
        component: 'views/Subnav1/Sub-option2/index.vue',
        meta: {
          title: '层子级菜单2',
          layout: true,
          menu: true,
          icon: '',
          sort: 6
        }
      }
    ]
  }
]

const adminRoutes: routerInfo[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: 'views/Dashboard/index.vue',
    meta: {
      title: '仪表板',
      layout: true,
      menu: true,
      icon: '',
      sort: 1
    }
  }
]

const userRoutes: routerInfo[] = []

export { rootRoutes, adminRoutes, userRoutes, routerInfo }
