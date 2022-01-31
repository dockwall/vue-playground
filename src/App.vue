<template>
  <div id="app">
    <button @click="goBack">Go back</button>
    <todo-list />

    <!-- <router-link to="/main">Main</router-link> -->
    <!-- <router-link to="/blog">Blog</router-link> -->
    <router-view />
  </div>
</template>

<script>
import Todos from './components/todos.vue'

export default {
  components: {
    'todo-list': Todos
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
}
</script>

<style>

</style>