import Vue from 'vue'
import VueRouter from 'vue-router'

import Notes from '../views/Notes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/notes'
  },
  {
    path: '/notes',
    name: 'notes',
    component: Notes
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/Edit.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/About.vue'),
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
