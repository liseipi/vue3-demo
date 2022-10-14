import { createStore } from 'vuex'
import loading from './modules/loading'
import user from './modules/user'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    loading,
    user
  }
})
