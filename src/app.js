import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    },
  },
});
