import { defineStore } from 'pinia'

export const useUserStore = defineStore('storeUser', {
  state() {
    return {
      token: '',
      userInfo: {},
      routes: []
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(userInfo: object) {
      this.userInfo = userInfo
    },
    setRoutes(routes: []) {
      this.routes = routes
    },
    clearToken() {
      this.token = ''
    },
    clearUserInfo() {
      this.userInfo = {}
    },
    clearRoutes() {
      this.routes = []
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
