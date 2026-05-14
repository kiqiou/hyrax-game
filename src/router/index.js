// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'first',
    component: () => import('@/components/FirstTask.vue')
  },
 {
    path: '/secondTask',
    name: 'second',
    component: () => import('@/components/SecondTask.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes
})

export default router
