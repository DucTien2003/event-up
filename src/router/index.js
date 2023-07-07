import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: "default-layout",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      layout: "default-layout",
    },
  },
  {
    path: "/blog-details",
    name: "blog-details",
    component: () =>
      import(
        /* webpackChunkName: "blog-details" */ "../views/BlogDetailsView.vue"
      ),
    meta: {
      layout: "default-layout",
    },
  },
  {
    path: "/blog",
    name: "blog",
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/BlogView.vue"),
    meta: {
      layout: "default-layout",
    },
  },
  {
    path: "/career",
    name: "career",
    component: () =>
      import(/* webpackChunkName: "career" */ "../views/CareerView.vue"),
    meta: {
      layout: "default-layout",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
    meta: {
      layout: "auth-layout",
    },
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () =>
      import(/* webpackChunkName: "pricing" */ "../views/PricingView.vue"),
    meta: {
      layout: "default-layout",
    },
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "../views/SignUpView.vue"),
    meta: {
      layout: "auth-layout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
