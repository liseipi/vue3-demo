const splicingRoutes = (routesData: any[], routesFile: any) => {
  return routesData.map((node) => {
    const tempNode = node
    // console.log(tempNode.component)
    // console.log(routesFile[`../${tempNode.component}`])
    if (tempNode.component) {
      tempNode.component = routesFile[`../${tempNode.component}`]
    }
    if (tempNode.children && tempNode.children.length) {
      splicingRoutes(tempNode.children, routesFile)
    }
    return tempNode
  })
}

const addRoutes = (storeUser: any, router: any) => {
  if (storeUser.routes && storeUser.routes.length > 0) {
    const routesData = JSON.parse(JSON.stringify(storeUser.routes))
    const views = import.meta.glob('../views/**/*.vue')
    const splicingRoutesData = splicingRoutes(routesData, views)
    splicingRoutesData.forEach((item: any) => {
      router.addRoute(item)
    })
  }
  router.addRoute({
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/Error/404.vue'),
    meta: {
      title: 'Error Page',
      layout: true,
      menu: false,
      icon: '',
      sort: 1
    }
  })
}

const clearRoutes = (storeUser: any, router: any) => {
  if (storeUser.routes && storeUser.routes.length > 0) {
    storeUser.routes.forEach((item: any) => {
      router.removeRoute(item)
    })
    storeUser.clearRoutes()
  }
}

export { addRoutes, clearRoutes }
