<template>
  <a-menu
    v-model:selectedKeys='selectedKeys2'
    mode='inline'
    :style="{ height: '100%', borderRight: 0 }"
    @select='menuChange'
  >
    <template v-for='item in routesData' :key='item.name'>
      <template v-if='item.meta.menu'>
        <template v-if='item.children && item.children.length >0'>
          <SideSubMenu :routes-data='item' :key='item.name' />
        </template>
        <template v-else>
          <a-menu-item :key='item.name'>
            <MyIcon :icon="'PieChartOutlined'" />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
      </template>
    </template>
  </a-menu>
</template>

<script setup lang='ts'>
import MyIcon from '@/util/icon'
import { onMounted, ref, watch } from 'vue'
import { RouteRecordName, useRoute, useRouter } from 'vue-router'
import SideSubMenu from '@/layout/modules/SideSubMenu.vue'

const router = useRouter()
const route = useRoute()

const routesKey = ref<(RouteRecordName | null | undefined)[]>([])
const routesData = ref<any[]>([])

const selectedKeys2 = ref<(RouteRecordName | null | undefined)[]>([])
const openKeys = ref<(RouteRecordName | null | undefined)[]>([])

const useSortRouter = (routeTree: any[]) => {
  routeTree.sort((aItem, bItem) => {
    return aItem.meta.sort - bItem.meta.sort
  })
  routeTree.map((node: any) => {
    const tempNode = node
    if (tempNode.children && tempNode.children.length > 0) {
      useSortRouter(tempNode.children)
    }
    return tempNode
  })
}

const getMenu = () => {
  let menuRoutes = router.getRoutes()
  menuRoutes = menuRoutes.filter((item: any) => {
    return item.meta.menu && item.path.split('/').length === 2
  })
  useSortRouter(menuRoutes)
  console.log(menuRoutes)
  routesData.value = menuRoutes
  routesKey.value = [route.name]
  selectedKeys2.value = [route.name]
  // openKeys.value = [route.name]
}

const menuChange = (item: { key: string }) => {
  router.push({ name: item.key })
}

onMounted(() => {
  getMenu()
})

watch(() => route.name, (value) => {
  if (value) {
    routesKey.value = [route.name]
    selectedKeys2.value = [route.name]
    // openKeys.value = [route.name]
  }
})
</script>