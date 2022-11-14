import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Project from "../views/Project.vue";
import Service from "../views/Service.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:name",
    name: "About",
    component: About,
  },
  {
    path: "/:name",
    name: "Project",
    component: Project,
  },
  {
    path: "/:name",
    name: "Service",
    component: Service,
  },
  {
    path: "/:name",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
