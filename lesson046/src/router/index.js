import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

console.log(`process.env.BASE_URL: ${process.env.BASE_URL}`);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
