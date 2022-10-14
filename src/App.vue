<template>
  <layout v-if="$route.meta.layout" />
  <a-spin v-else :spinning="store.state.loading.loadingState" :delay="300">
    <router-view />
  </a-spin>
</template>

<script setup lang="ts">
import layout from '@/layout/index.vue'
import { useStore } from 'vuex'

const store = useStore()
</script>
