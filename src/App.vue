<template>
  <div id="app">
    <router-link to="/main">Main</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    console.log('App.vue')
  }
}
</script>

<style>

</style>