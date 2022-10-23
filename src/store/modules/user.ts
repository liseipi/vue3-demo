import { defineStore } from 'pinia'

export const useUserStore = defineStore('storeUser', {
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(userInfo: object) {
      this.userInfo = userInfo
    },
    clearToken() {
      this.token = ''
    },
    clearUserInfo() {
      this.userInfo = {}
    },
    signOut() {
      this.token = ''
      this.userInfo = {}
    }
  },
  persist: {
    enabled: true,
    strategies: [
      { key: 'token', storage: localStorage, paths: ['token'] },
      { key: 'userInfo', storage: localStorage, paths: ['userInfo'] }
    ]
  }
})
