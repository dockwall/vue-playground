<template>
  <div id="app">
    <button @click="goBack">Go back</button>
    <router-link to="/main">Main</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  updated() {
    // console.log(this.$route.path)
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style>

</style>