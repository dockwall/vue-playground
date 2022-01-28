import Vue from 'vue'
import Router from 'vue-router'

import blog from '../components/blog.vue'
import main from '../components/main.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/blog', component: blog },
      { path: '/main', component: main },
      { path: '/', redirect: '/main' },
    ],
  })
}
