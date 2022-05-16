<template>
  <div class="d-flex justify-content-between mx-2 pb-2">
    <span @click="updateTodoStatus(todo)" :class="{ 'is-completed':todo.isCompleted }">{{ todo.title }}</span>
    <button @click="deleteTodo" type="button" class="btn btn-outline-danger">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
    }
  },
  methods: {
    deleteTodo: function(){
      this.$store.dispatch('deleteTodo', this.todo)
    },
    updateTodoStatus: function(){
      this.$store.dispatch('updateTodoStatus', this.todo)
    }
  }
}
</script>

<style scoped>
.is-completed {
  text-decoration: line-through;
}
</style>