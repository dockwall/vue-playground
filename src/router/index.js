import Vue from 'vue'
import Router from 'vue-router'

import blogPost from '../components/blog-post.vue'
import main from '../components/main.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/blog', component: blogPost },
      { path: '/main', component: main },
      { path: '/', redirect: '/main' },
    ],
  })
}
