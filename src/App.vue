<template>
  <layout v-if="$route.meta.layout" />
  <a-spin v-else :spinning="storeLoading.loadingState" :delay="300">
    <router-view />
  </a-spin>
</template>

<script setup lang="ts">
import layout from '@/layout/index.vue'
import { useLoadingStore } from '@/store'

const storeLoading = useLoadingStore()
</script>
