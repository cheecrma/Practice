<template>
  <div>
    <span>{{ todo.title }}</span>
    <button @click="deleteTodo">Delete</button>
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
  }
}
</script>

<style>

</style>