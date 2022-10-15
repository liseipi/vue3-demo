import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('storeLoading', {
  state: () => {
    return {
      loadingState: false
    }
  },
  actions: {
    showLoading() {
      this.loadingState = true
    },
    hideLoading() {
      this.loadingState = false
    }
  },
  persist: {
    enabled: true
  }
})
