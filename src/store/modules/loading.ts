const loading = {
  namespaced: true,
  state: {
    loadingState: false
  },
  mutations: {
    showLoading(state: any) {
      state.loadingState = true
    },
    hideLoading(state: any) {
      state.loadingState = false
    }
  },
  actions: {},
  modules: {}
}

export default loading
