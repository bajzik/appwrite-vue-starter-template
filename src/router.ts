import { createRouter, createWebHistory } from "vue-router";

import SampleView from "./views/SampleView.vue";

const routes = [
  {
    path: "/",
    component: SampleView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
