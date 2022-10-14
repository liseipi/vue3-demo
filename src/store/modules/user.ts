const loading = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}')
  },
  mutations: {
    setToken(state: any, token: string) {
      state.token = token
      localStorage.setItem('token', token)
    },
    setUserInfo(state: any, userInfo: object) {
      state.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    clearToken(state: any) {
      state.token = ''
      localStorage.removeItem('token')
    },
    clearUserInfo(state: any) {
      state.userInfo = {}
      localStorage.removeItem('userInfo')
    }
  },
  actions: {},
  modules: {}
}

export default loading
