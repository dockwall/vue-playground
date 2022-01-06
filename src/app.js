import Vue from 'vue'

import blogPost from './components/blog-post.vue'

let counter = 0

const data = {
  message: 'Hello Vue!',
  groceryList: [
    { id: 0, text: 'Vegetables' },
    { id: 1, text: 'Cheese' },
    { id: 2, text: 'Whatever else humans are supposed to eat' },
  ],
  posts: [
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fun' },
  ],
}

const vm = new Vue({
  el: '#app',
  components: {
    'blog-post': blogPost,
  },
  data: data,
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
  },
  created: function () {
    console.log('message is: ' + this.message)
  },
  mounted: function () {
    console.log(`render counter: ${++counter}`)
  },
  updated: function () {
    console.log(`render counter: ${++counter}`)
  },
})

vm.$watch('message', function (newValue) {
  console.log('message:', newValue)
})
