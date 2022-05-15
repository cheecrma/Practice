import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: '할 일1',
        isCompleted: false,
        data: new Date().getTime(),
      },
      {
        title: '할 일2',
        isCompleted: false,
        data: new Date().getTime(),
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
