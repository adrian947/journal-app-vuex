import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/HomePage.vue'
import daybookRouter from '../modules/daybook/router'

const routes = [
  { path: "/", name: "Home", component: Home},
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutPage.vue"),
  },
  {
    path: "/daybook",
    ...daybookRouter
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
