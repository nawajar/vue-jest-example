import { createRouter, createWebHistory } from "vue-router";
import Menu from "../components/menu/menu.vue"
import Hello1 from "../components/hello-1/hello-1.vue"
import Hello2 from "../components/hello-2/hello-2.vue"
import Hello3 from "../components/hello-3/hello-3.vue"

const routes = [
  {
    path: "/",
    component: Menu,
    children: [
      {
        path: "/hello-1",
        name: "helo1",
        component: Hello1
      },
      {
        path: "/hello-2",
        name: "helo2",
        component: Hello2
      },
      {
        path: "/hello-3",
        name: "helo3",
        component: Hello3
      },
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
