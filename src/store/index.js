import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      todos: [
        { id: 1, text: 'Do some stuff', done: false },
        { id: 2, text: 'Next stuff', done: false },
      ],
    },
  })
}
