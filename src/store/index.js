import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    status: 0
  },
  mutations: {
    changeNetwork (state) {
    }
  },
  actions: {
    increment (context) {
      context.commit('changeNetwork')
    }
  }
})
export default store
