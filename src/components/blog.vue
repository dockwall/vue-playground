<template>
  <div>
    <p>I'm Blog Page!  ✨</p>
    <router-link v-if="displayLink" :to="{ path: `blog/${id}` }">to post #1</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      id: 1
    }
  },
  updated() {
    console.log(this.$route)
  },
  computed: {
    displayLink: function() {
      return !this.$route.params.id
    }
  }
}
</script>

<style>

</style>