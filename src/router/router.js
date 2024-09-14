import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/components/view/HomeView.vue";
import AboutView from "@/components/view/AboutView.vue";
import SingleCategory from "@/components/view/SingleCategory.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/category/:category", component: SingleCategory },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
