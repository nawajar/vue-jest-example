import { createRouter, createWebHistory } from "vue-router";
import Menu from "../components/menu/menu.vue"

const routes = [
  {
    path: "/",
    component: Menu,
    children: [
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  }
});

export default router;
