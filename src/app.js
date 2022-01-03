import Vue from 'vue';

const data = {
  message: 'Hello Vue!',
  groceryList: [
    { id: 0, text: 'Vegetables' },
    { id: 1, text: 'Cheese' },
    { id: 2, text: 'Whatever else humans are supposed to eat' },
  ],
};

const vm = new Vue({
  el: '#app',
  data: data,
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    },
  },
  created: function () {
    console.log('message is: ' + this.message);
  },
});

vm.$watch('message', function (newValue) {
  console.log('message:', newValue);
});
