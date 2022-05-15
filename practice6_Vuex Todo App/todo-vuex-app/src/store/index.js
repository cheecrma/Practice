import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
  },
  mutations: {
    CREATE_TODO: function (state, todoItem) {
      state.todos.push(todoItem)
    }
  },
  actions: {
    createTodo: function ( {commit} , todoItem) {
      commit('CREATE_TODO', todoItem)
    }
  },
  modules: {
  }
})
