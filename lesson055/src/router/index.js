import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  // Default page. This route doesn't have to be last record in array.
  {
    path: "/:catchAll(.*)",
    component: NotFound,
    name: "NotFound",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About,
  // },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true,
  },
  // redirect
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
];

console.log(`process.env.BASE_URL: ${process.env.BASE_URL}`);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
