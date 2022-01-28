import Vue from 'vue'
import Router from 'vue-router'

import blog from '../components/blog.vue'
// import post from '../components/post.vue'
import main from '../components/main.vue'
import error from '../components/error.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/main', component: main },
      {
        path: '/blog/:id',
        component: blog,
      },
      { path: '/', redirect: '/main' },
      {
        path: '*',
        component: error,
      },
    ],
  })
}
