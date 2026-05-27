// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/pages/MainPage.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("@/pages/Shop.vue"),
  },
  {
    path: "/forest",
    name: "forest",
    component: () => import("@/pages/Forest.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
