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
    },
    DELETE_TODO: function (state, todoItem){
      const index = state.todos.indexOf(todoItem)
      state.todos.splice(index, 1)
    }
  },
  actions: {
    createTodo: function ( {commit} , todoItem) {
      commit('CREATE_TODO', todoItem)
    },
    deleteTodo: function ({commit}, todoItem){
      commit('DELETE_TODO', todoItem)
    }
  },
  modules: {
  }
})
