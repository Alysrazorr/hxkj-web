import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    support: '广东政典新动能研究院有限公司',
    company: '合信科技'
  },
  mutations: {
    setToken: (state, token) => {
      window.sessionStorage.setItem('token', token)
      state.token = token
    },
    clearToken: (state) => {
      window.sessionStorage.removeItem('token')
      state.token = null
    }
  }
})
