<template>
  <ul>
    <li class="list-item" v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </li>
  </ul>
</template>

<script>
export default {
  mounted() {
    console.log(this.todos)
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  }
}
</script>

<style lang="scss">
  .list-item {
    cursor: pointer
  }
</style>