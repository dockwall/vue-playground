<template>
  <h3 v-on:click="reverse">{{ title }}</h3>
</template>

<script>
export default {
  props: ['title', 'reverse']
}
</script>

<style>

</style>