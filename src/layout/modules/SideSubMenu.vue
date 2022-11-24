<template>
  <a-sub-menu :key='routesData.name'>
    <template #icon v-if='routesData.meta.icon'>
      <MyIcon :icon='"PieChartOutlined"' />
    </template>
    <template #title>
      {{ routesData.meta.title }}
    </template>
    <template v-for='item in routesData.children'>
      <template v-if='item.children && item.children.length >0'>
        <SideSubMenu :routes-data='item' :key='item.name' />
      </template>
      <template v-else>
        <a-menu-item :key='item.name'>
          <MyIcon :icon='"PieChartOutlined"' />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
      </template>
    </template>
  </a-sub-menu>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
import MyIcon from '@/util/icon'

defineProps({
  routesData: {
    type: Object,
    default: () => {
    }
  }
})
</script>