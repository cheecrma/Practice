<template>
  <div class="input-group input-group-sm mb-3">
    <input class="input-group-lg form-control" type="text" v-model.trim="todoTitle" @keyup.enter="createTodo"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    <button @click="createTodo"  type="button" class="btn btn-outline-primary">Add</button>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data: function (){
    return {
      todoTitle:'',
    }
  },
  methods: {
    createTodo: function (){
      const todoItem = {
        title: this.todoTitle,
        isCompleted: false,
        date: new Date().getTime(),
      }
      if (todoItem.title) {
        this.$store.dispatch('createTodo', todoItem)
      }
      this.todoTitle=''
    },
  },
}
</script>

<style>

</style>