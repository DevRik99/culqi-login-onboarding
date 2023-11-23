import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/empleados",
    name: "Empleados",
    component: () => import("../views/Empleados.vue"),
    beforeEnter: () => {
      const token = localStorage.getItem("token");
      return token ? true : false;
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
