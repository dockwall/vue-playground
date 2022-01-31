import Vue from 'vue'
import App from './App.vue'

import { createStore } from './store'
import { createRouter } from './router'

const router = createRouter()
const store = createStore()

const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
