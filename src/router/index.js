// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/components/pages/MainPage.vue')
  },
 {
    path: '/shop',
    name: 'shop',
    component: () => import('@/components/pages/Shop.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes
})

export default router
