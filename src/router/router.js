import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/components/view/HomeView.vue";
import AboutView from "@/components/view/AboutView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
