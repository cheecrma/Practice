<template>
  <div id="app" class="d-flex justify-content-center">
    <div style="width: 18rem;">
      <h1 class="d-flex justify-content-center mt-3">Todo List</h1>
      <hr>
      <div>
      <h3 class="d-flex justify-content-center">All Todos: {{allTodosCount}} </h3>
      <h3 class="d-flex justify-content-center">Completed Todo: {{completedTodosCount}} </h3>
      <h3 class="d-flex justify-content-center">Uncompleted Todo: {{uncompletedTodosCount}} </h3>
      </div>
      <hr>
      <div id="box">
        <span>
          <todo-list></todo-list>
        </span>
      </div>
      <span>
      <todo-form></todo-form>
      </span>
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoForm from '@/components/TodoForm'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm,
  },
  computed: {
    completedTodosCount: function(){
      return this.$store.getters.completedTodosCount
    },
    uncompletedTodosCount: function(){
      return this.$store.getters.uncompletedTodosCount
    },
    allTodosCount: function(){
      return this.$store.getters.allTodosCount
    }
  }
}
</script>

<style>

  #box {
    background: linear-gradient( to top,rgba(46, 100, 218, 0.378),  white);
  }
</style>
